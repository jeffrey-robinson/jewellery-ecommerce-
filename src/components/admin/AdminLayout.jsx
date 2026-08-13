import { BarChart3, Boxes, ClipboardList, LogOut, Menu, MessageSquare, Users, X } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

const links = [
  ['Dashboard', '/admin', BarChart3], ['Products', '/admin/products', Boxes], ['Orders', '/admin/orders', ClipboardList], ['Customers', '/admin/customers', Users], ['Reviews', '/admin/reviews', MessageSquare],
]

export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const { signOut } = useAdminAuth()
  const sidebar = <aside className="flex h-full w-72 flex-col bg-ink p-5 text-white"><div className="mb-9 px-3"><p className="font-display text-2xl text-gold">JEM</p><p className="text-xs tracking-[.2em] text-white/45">ADMIN STUDIO</p></div><nav className="space-y-1">{links.map(([name, to, Icon]) => <NavLink end={to === '/admin'} onClick={() => setOpen(false)} key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-gold text-ink' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}><Icon size={18} />{name}</NavLink>)}</nav><button onClick={signOut} className="mt-auto flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/65 hover:bg-white/10 hover:text-white"><LogOut size={18} />Sign out</button></aside>
  return <div className="min-h-screen bg-slate-50"><div className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-ink px-5 text-white lg:hidden"><span className="font-display text-xl text-gold">JEM Admin</span><button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <div className="fixed inset-0 z-30 pt-16 lg:hidden"><button aria-label="Close navigation" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40" /><div className="relative h-full">{sidebar}</div></div>}<div className="hidden fixed inset-y-0 left-0 z-20 lg:block">{sidebar}</div><main className="pt-16 lg:pl-72 lg:pt-0"><div className="mx-auto max-w-7xl p-5 sm:p-8"><Outlet /></div></main></div>
}
