import { Cross } from 'lucide-react'
export default function Logo({compact=false}){
  return <div className="flex items-center gap-2.5"><span className="grid size-10 place-items-center rounded-xl bg-brand-700 text-white shadow-lg shadow-brand-600/25"><Cross size={23}/></span>{!compact&&<span className="font-display text-xl font-extrabold tracking-tight text-navy dark:text-white">medora<span className="text-brand-600">+</span></span>}</div>
}
