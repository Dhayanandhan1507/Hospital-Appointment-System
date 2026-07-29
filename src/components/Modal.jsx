import { X } from 'lucide-react'
import { motion } from 'framer-motion'
export default function Modal({open,onClose,title,children,size='max-w-lg'}){
 if(!open)return null;return <div className="fixed inset-0 z-50 grid place-items-center bg-navy/60 p-4 backdrop-blur-sm" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><motion.div initial={{opacity:0,scale:.96,y:12}} animate={{opacity:1,scale:1,y:0}} className={`max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 ${size}`}><div className="mb-5 flex items-center justify-between"><h2 className="text-xl">{title}</h2><button onClick={onClose} className="grid size-9 place-items-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><X size={19}/></button></div>{children}</motion.div></div>
}
