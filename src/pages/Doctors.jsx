import { useMemo,useState } from 'react'
import { Search,SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import DoctorCard from '../components/DoctorCard'
import EmptyState from '../components/EmptyState'
export default function Doctors(){
 const {doctors,departments}=useApp();const [params]=useSearchParams();const [search,setSearch]=useState('');const [dep,setDep]=useState(params.get('department')||'All')
 const data=useMemo(()=>doctors.filter(d=>(dep==='All'||d.department===dep)&&`${d.name} ${d.speciality}`.toLowerCase().includes(search.toLowerCase())),[doctors,dep,search])
 return <><PageHero eyebrow="Medical team" title="Find your specialist" text="Choose from our experienced, verified doctors across leading specialties."/><section className="container-page py-12"><div className="mb-8 flex flex-col gap-3 rounded-2xl border bg-white p-4 shadow-sm dark:bg-slate-900 sm:flex-row"><label className="relative flex-1"><Search className="absolute left-4 top-3.5 text-slate-400" size={19}/><input className="input !pl-11" placeholder="Search doctor or specialty…" value={search} onChange={e=>setSearch(e.target.value)}/></label><label className="relative sm:w-64"><SlidersHorizontal className="absolute left-4 top-3.5 text-slate-400" size={18}/><select className="input !pl-11" value={dep} onChange={e=>setDep(e.target.value)}><option>All</option>{departments.map(d=><option key={d.id}>{d.name}</option>)}</select></label></div><p className="mb-5 text-sm text-slate-500">Showing <b>{data.length}</b> doctors</p>{data.length?<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{data.map(d=><DoctorCard key={d.id} doctor={d}/>)}</div>:<EmptyState title="No doctors found" text="Try changing your search or department filter."/>}</section></>
}
export function PageHero({eyebrow,title,text}){return <section className="hero-grid bg-gradient-to-r from-brand-50 to-cyan-50 py-14 text-center dark:from-slate-900 dark:to-brand-950"><div className="container-page"><p className="font-bold uppercase tracking-[.2em] text-brand-600">{eyebrow}</p><h1 className="mt-2 text-4xl">{title}</h1><p className="mx-auto mt-3 max-w-2xl text-slate-500 dark:text-slate-300">{text}</p></div></section>}
