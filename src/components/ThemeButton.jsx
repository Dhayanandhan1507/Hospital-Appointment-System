import { Moon,Sun } from 'lucide-react'
import { useApp } from '../context/AppContext'
export default function ThemeButton(){
  const {theme,setTheme}=useApp()
  return <button aria-label="Toggle theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="grid size-10 place-items-center rounded-xl border bg-white text-slate-600 transition hover:text-brand-700 dark:bg-slate-900 dark:text-slate-200">{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
}
