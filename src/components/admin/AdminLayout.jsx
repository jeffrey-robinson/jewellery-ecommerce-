import { BarChart3, Boxes, ClipboardList, LogOut, Menu, MessageSquare, Users, X } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

const links = [
  ['Dashboard', '/admin', BarChart3], 
  ['Products', '/admin/products', Boxes], 
  ['Orders', '/admin/orders', ClipboardList], 
  ['Customers', '/admin/customers', Users], 
  ['Reviews', '/admin/reviews', MessageSquare],
]

export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const { signOut } = useAdminAuth()
  
  const sidebar = (
    <aside className="flex h-full w-72 flex-col bg-[#3B183F] p-6 text-white border-r border-[#D4AF65]/20">
      <div className="mb-10 px-3">
        <p className="font-display text-3xl text-[#D4AF65] tracking-wide font-medium">JEM</p>
        <p className="text-xs tracking-[0.25em] text-[#E8D8EE]/50 mt-1 uppercase">Admin Atelier</p>
      </div>
      <nav className="space-y-1.5 flex-grow">
        {links.map(([name, to, Icon]) => (
          <NavLink 
            end={to === '/admin'} 
            onClick={() => setOpen(false)} 
            key={to} 
            to={to} 
            className={({ isActive }) => `flex items-center gap-3 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-all border ${
              isActive 
                ? 'bg-[#6A3578] border-[#D4AF65]/30 text-white shadow-md' 
                : 'border-transparent text-[#E8D8EE]/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Icon size={16} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
      <button 
        onClick={signOut} 
        className="flex items-center gap-3 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#E8D8EE]/70 hover:bg-white/5 hover:text-white transition-all border border-transparent mt-auto"
      >
        <LogOut size={16} />
        <span>Sign Out</span>
      </button>
    </aside>
  )

  return (
    <div className="min-h-screen bg-[#FCF8F2]">
      {/* Mobile Header */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-[#3B183F] px-5 text-white lg:hidden border-b border-[#D4AF65]/20">
        <span className="font-display text-xl text-[#D4AF65] font-medium tracking-wide">JEM Admin</span>
        <button onClick={() => setOpen(!open)} className="text-white hover:text-[#D4AF65] transition-colors">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-30 pt-16 lg:hidden">
          <button 
            aria-label="Close navigation" 
            onClick={() => setOpen(false)} 
            className="absolute inset-0 bg-[#3B183F]/60 backdrop-blur-xs" 
          />
          <div className="relative h-full w-72">{sidebar}</div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden fixed inset-y-0 left-0 z-20 lg:block">{sidebar}</div>

      {/* Main Viewport */}
      <main className="pt-16 lg:pl-72 lg:pt-0">
        <div className="mx-auto max-w-7xl p-5 sm:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
