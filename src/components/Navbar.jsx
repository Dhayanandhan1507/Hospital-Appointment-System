import { useState } from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom'
import { Menu,X,Phone,ChevronDown,UserRound } from 'lucide-react'
import Logo from './Logo'
import ThemeButton from './ThemeButton'
import { useApp } from '../context/AppContext'

const links=[['Home','/'],['About','/about'],['Departments','/departments'],['Doctors','/doctors'],['Contact','/contact'],['FAQ','/faq']]
export default function Navbar(){
 const [open,setOpen]=useState(false); const {user,logout}=useApp();const nav=useNavigate()
 const dash=user?`/${user.role}`:'/login'
 return <><div className="bg-navy py-2 text-xs text-white"><div className="container-page flex items-center justify-between"><span className="flex items-center gap-2"><Phone size={13}/>24/7 Emergency: <b>1800 555 0101</b></span><span className="hidden sm:block">Compassionate care. Closer to you.</span></div></div>
 <header className="sticky top-0 z-40 border-b glass"><div className="container-page flex h-18 items-center justify-between py-3">
  <Link to="/"><Logo/></Link>
  <nav className="hidden items-center gap-1 lg:flex">{links.map(([n,p])=><NavLink key={p} to={p} className={({isActive})=>`rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive?'bg-brand-50 text-brand-700 dark:bg-brand-900/30':'hover:text-brand-700'}`}>{n}</NavLink>)}</nav>
  <div className="hidden items-center gap-2 lg:flex"><ThemeButton/>{user?<><button onClick={()=>nav(dash)} className="btn-secondary !px-4 !py-2.5"><UserRound size={17}/>{user.name.split(' ')[0]}</button><button onClick={()=>{logout();nav('/')}} className="text-sm font-semibold text-slate-500">Logout</button></>:<Link to="/login" className="btn-secondary !px-4 !py-2.5">Sign in</Link>}<Link to="/book" className="btn-primary !px-4 !py-2.5">Book appointment</Link></div>
  <button className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>
 {open&&<div className="container-page border-t py-4 lg:hidden">{links.map(([n,p])=><Link onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold hover:bg-brand-50" key={p} to={p}>{n}</Link>)}<div className="mt-3 flex gap-2"><ThemeButton/><Link onClick={()=>setOpen(false)} to={user?dash:'/login'} className="btn-secondary flex-1">{user?'Dashboard':'Sign in'}</Link><Link onClick={()=>setOpen(false)} to="/book" className="btn-primary flex-1">Book now</Link></div></div>}
 </header></>
}
