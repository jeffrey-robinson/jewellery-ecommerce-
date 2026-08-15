import { Navigate } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLogin() {
  const { isAdmin, signIn } = useAdminAuth()
  if (isAdmin) return <Navigate to="/admin" replace />
  return (
    <div className="min-h-screen bg-[#3B183F] p-5 flex items-center justify-center relative overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-[#6A3578]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-[#D4AF65]/10 blur-3xl" />
      
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft border border-[#E8D8EE] relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8D8EE] text-[#6A3578]">
          <LockKeyhole size={20} />
        </div>
        <p className="text-xs font-bold tracking-[.25em] text-[#6A3578] uppercase">JEM Atelier</p>
        <h1 className="font-display mt-2 text-3xl text-[#211522] font-semibold">Welcome Back</h1>
        <p className="mt-3 text-sm text-[#211522]/60 font-body leading-relaxed">
          This panel handles product catalogs, order stats, and collections. Connect this screen to your real auth provider before production.
        </p>
        <button 
          onClick={signIn} 
          className="mt-8 w-full rounded-full bg-[#6A3578] hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] py-3.5 font-semibold text-white shadow-md transition-all text-xs uppercase tracking-widest"
        >
          Enter Admin Panel
        </button>
      </div>
    </div>
  )
}
