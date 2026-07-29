import { HeartPulse,Brain,Baby,Bone,Stethoscope,Sparkles,ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { PageHero } from './Doctors'
const icons={HeartPulse,Brain,Baby,Bone,Stethoscope,Sparkles}
export default function Departments(){const {departments}=useApp();return <><PageHero eyebrow="Centers of excellence" title="Specialized care, all in one place" text="Multidisciplinary teams and modern clinical facilities for complete care."/><section className="container-page grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">{departments.map(d=>{const I=icons[d.icon]||Stethoscope;return <article className="card group" key={d.id}><span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700"><I size={27}/></span><h2 className="mt-5 text-xl">{d.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{d.description}</p><div className="my-4 border-t"/><Link to={`/doctors?department=${d.name}`} className="flex items-center justify-between font-semibold text-brand-700">Find a specialist <ArrowRight size={18}/></Link></article>})}</section></>}
