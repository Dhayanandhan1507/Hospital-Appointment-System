import { Navigate,Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'
export default function ProtectedRoute({role}){const {user}=useApp();return user?.role===role?<Outlet/>:<Navigate to="/login" replace/>}
