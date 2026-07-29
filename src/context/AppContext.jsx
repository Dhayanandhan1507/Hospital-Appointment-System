import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { seedData } from '../data/seed'

const AppContext=createContext()
const read=(key,fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}}
const uid=(p)=>`${p}${Date.now()}${Math.random().toString(36).slice(2,6)}`

export function AppProvider({children}){
  const [doctors,setDoctors]=useState(()=>read('medora_doctors',seedData.doctors))
  const [patients,setPatients]=useState(()=>read('medora_patients',seedData.patients))
  const [departments,setDepartments]=useState(()=>read('medora_departments',seedData.departments))
  const [appointments,setAppointments]=useState(()=>read('medora_appointments',seedData.appointments))
  const [user,setUser]=useState(()=>read('medora_user',null))
  const [theme,setTheme]=useState(()=>localStorage.getItem('medora_theme')||'light')

  useEffect(()=>localStorage.setItem('medora_doctors',JSON.stringify(doctors)),[doctors])
  useEffect(()=>localStorage.setItem('medora_patients',JSON.stringify(patients)),[patients])
  useEffect(()=>localStorage.setItem('medora_departments',JSON.stringify(departments)),[departments])
  useEffect(()=>localStorage.setItem('medora_appointments',JSON.stringify(appointments)),[appointments])
  useEffect(()=>{user?localStorage.setItem('medora_user',JSON.stringify(user)):localStorage.removeItem('medora_user')},[user])
  useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark');localStorage.setItem('medora_theme',theme)},[theme])

  const login=(email,password,role)=>{
    let found
    if(role==='admin'&&email==='admin@medora.com'&&password==='admin123') found={id:'admin1',name:'Hospital Admin',email,role:'admin'}
    if(role==='doctor') found=doctors.find(x=>x.email===email&&x.password===password)
    if(role==='patient') found=patients.find(x=>x.email===email&&x.password===password)
    if(!found)return false
    setUser({...found,role}); toast.success(`Welcome back, ${found.name.split(' ')[0]}!`); return true
  }
  const register=(data)=>{if(patients.some(x=>x.email===data.email))return false;const p={...data,id:uid('pat'),role:'patient'};setPatients(v=>[...v,p]);setUser(p);toast.success('Account created successfully');return true}
  const logout=()=>{setUser(null);toast.info('You have been signed out')}
  const addDoctor=d=>{setDoctors(v=>[...v,{...d,id:uid('doc'),avatar:d.name.split(' ').filter(x=>x!=='Dr.').map(x=>x[0]).join('').slice(0,2),rating:5,patients:0,status:'Active',available:['09:00 AM','11:00 AM','03:00 PM']}]);toast.success('Doctor added')}
  const updateDoctor=d=>{setDoctors(v=>v.map(x=>x.id===d.id?d:x));toast.success('Doctor updated')}
  const deleteDoctor=id=>{setDoctors(v=>v.filter(x=>x.id!==id));toast.success('Doctor removed')}
  const saveDepartment=d=>{setDepartments(v=>d.id?v.map(x=>x.id===d.id?d:x):[...v,{...d,id:uid('dep'),doctors:0}]);toast.success(`Department ${d.id?'updated':'added'}`)}
  const deleteDepartment=id=>{setDepartments(v=>v.filter(x=>x.id!==id));toast.success('Department removed')}
  const bookAppointment=data=>{
    if(appointments.some(a=>a.doctorId===data.doctorId&&a.date===data.date&&a.time===data.time&&a.status!=='Rejected'))return {ok:false,message:'This time slot is already booked'}
    setAppointments(v=>[...v,{...data,id:uid('apt'),status:'Pending',createdAt:new Date().toISOString()}]);toast.success('Appointment request submitted');return {ok:true}
  }
  const updateAppointment=(id,status)=>{setAppointments(v=>v.map(x=>x.id===id?{...x,status}:x));toast.success(`Appointment marked ${status}`)}
  const cancelAppointment=id=>updateAppointment(id,'Rejected')
  const updateProfile=data=>{const updated={...user,...data};setUser(updated);if(user.role==='patient')setPatients(v=>v.map(x=>x.id===user.id?{...x,...data}:x));if(user.role==='doctor')setDoctors(v=>v.map(x=>x.id===user.id?{...x,...data}:x));toast.success('Profile updated')}
  const value=useMemo(()=>({doctors,patients,departments,appointments,user,theme,setTheme,login,register,logout,addDoctor,updateDoctor,deleteDoctor,saveDepartment,deleteDepartment,bookAppointment,updateAppointment,cancelAppointment,updateProfile,setPatients}),[doctors,patients,departments,appointments,user,theme])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export const useApp=()=>useContext(AppContext)
