import { Link } from 'react-router-dom'
import { Home,ArrowLeft } from 'lucide-react'
export default function NotFound(){return <div className="hero-grid grid min-h-[65vh] place-items-center px-4 text-center"><div><span className="font-display text-8xl font-extrabold text-brand-200">404</span><h1 className="mt-2 text-3xl">This page took a wrong turn</h1><p className="mt-3 text-slate-500">The page you’re looking for doesn’t exist or has moved.</p><Link to="/" className="btn-primary mt-6"><Home size={18}/>Back to home</Link></div></div>}
