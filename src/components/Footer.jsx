import { Link } from 'react-router-dom'
import { Facebook,Instagram,Linkedin,MapPin,Phone,Mail } from 'lucide-react'
import Logo from './Logo'
export default function Footer(){
 return <footer className="mt-20 bg-navy text-slate-300"><div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
  <div><Logo/><p className="mt-4 text-sm leading-6">Advanced medicine, compassionate care and an effortless digital experience—all under one roof.</p><div className="mt-5 flex gap-3">{[Facebook,Instagram,Linkedin].map((I,i)=><span key={i} className="grid size-9 place-items-center rounded-lg bg-white/10"><I size={17}/></span>)}</div></div>
  <div><h3 className="mb-4 text-white">Quick links</h3>{[['Find a doctor','/doctors'],['Book appointment','/book'],['Departments','/departments'],['Patient login','/login']].map(x=><Link className="mb-2 block text-sm hover:text-white" key={x[1]} to={x[1]}>{x[0]}</Link>)}</div>
  <div><h3 className="mb-4 text-white">Patient care</h3>{[['About us','/about'],['FAQ','/faq'],['Contact','/contact'],['Privacy policy','#']].map(x=><Link className="mb-2 block text-sm hover:text-white" key={x[0]} to={x[1]}>{x[0]}</Link>)}</div>
  <div><h3 className="mb-4 text-white">Contact</h3><p className="mb-3 flex gap-2 text-sm"><MapPin size={18} className="shrink-0 text-brand-300"/>42 Wellness Avenue, Bengaluru 560001</p><p className="mb-3 flex gap-2 text-sm"><Phone size={17} className="text-brand-300"/>1800 555 0101</p><p className="flex gap-2 text-sm"><Mail size={17} className="text-brand-300"/>care@medora.com</p></div>
 </div><div className="border-t border-white/10 py-5 text-center text-xs">© 2026 Medora Hospital. Built for better healthcare.</div></footer>
}
