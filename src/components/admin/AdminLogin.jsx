import { Navigate } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLogin() {
  const { isAdmin, signIn } = useAdminAuth()
  if (isAdmin) return <Navigate to="/admin" replace />
  return <div className="min-h-screen bg-ink p-5 flex items-center justify-center"><div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold"><LockKeyhole /></div><p className="text-xs font-bold tracking-[.2em] text-gold">JEM ADMIN</p><h1 className="font-display mt-2 text-3xl text-ink">Welcome back</h1><p className="mt-3 text-sm text-ink/60">This demo uses a local admin session. Connect this screen to your real authentication provider before production.</p><button onClick={signIn} className="mt-8 w-full rounded-xl bg-ink py-3 font-semibold text-white hover:bg-emerald-dark">Enter admin panel</button></div></div>
}
