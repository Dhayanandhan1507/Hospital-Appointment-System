import { Navigate,Route,Routes } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login,{Register} from './pages/Auth'
import BookAppointment from './pages/BookAppointment'
import NotFound from './pages/NotFound'
import { AdminOverview,DoctorOverview,PatientOverview } from './dashboard/Overview'
import { ManageDoctors,ManagePatients,ManageAppointments,ManageDepartments,Reports } from './dashboard/AdminPages'
import { DoctorAppointments,DoctorPatients,Availability,PatientDoctors,PatientAppointments,Profile,SettingsPage } from './dashboard/RolePages'

export default function App(){
 return <Routes>
  <Route element={<PublicLayout/>}>
   <Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="departments" element={<Departments/>}/><Route path="doctors" element={<Doctors/>}/><Route path="book" element={<BookAppointment/>}/><Route path="contact" element={<Contact/>}/><Route path="faq" element={<FAQ/>}/><Route path="*" element={<NotFound/>}/>
  </Route>
  <Route path="login" element={<Login/>}/><Route path="register" element={<Register/>}/>
  <Route element={<ProtectedRoute role="admin"/>}><Route path="admin" element={<DashboardLayout/>}><Route index element={<AdminOverview/>}/><Route path="doctors" element={<ManageDoctors/>}/><Route path="patients" element={<ManagePatients/>}/><Route path="appointments" element={<ManageAppointments/>}/><Route path="departments" element={<ManageDepartments/>}/><Route path="reports" element={<Reports/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="profile" element={<Profile/>}/></Route></Route>
  <Route element={<ProtectedRoute role="doctor"/>}><Route path="doctor" element={<DashboardLayout/>}><Route index element={<DoctorOverview/>}/><Route path="today" element={<DoctorAppointments/>}/><Route path="upcoming" element={<DoctorAppointments mode="upcoming"/>}/><Route path="patients" element={<DoctorPatients/>}/><Route path="availability" element={<Availability/>}/><Route path="profile" element={<Profile/>}/></Route></Route>
  <Route element={<ProtectedRoute role="patient"/>}><Route path="patient" element={<DashboardLayout/>}><Route index element={<PatientOverview/>}/><Route path="doctors" element={<PatientDoctors/>}/><Route path="book" element={<BookAppointment/>}/><Route path="appointments" element={<PatientAppointments/>}/><Route path="profile" element={<Profile/>}/></Route></Route>
 </Routes>
}
