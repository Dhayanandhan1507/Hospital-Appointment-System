const styles={Pending:'bg-amber-100 text-amber-700',Approved:'bg-blue-100 text-blue-700',Rejected:'bg-rose-100 text-rose-700',Completed:'bg-emerald-100 text-emerald-700',Active:'bg-emerald-100 text-emerald-700'}
export default function StatusBadge({status}){return <span className={`badge ${styles[status]||'bg-slate-100 text-slate-600'}`}>{status}</span>}
