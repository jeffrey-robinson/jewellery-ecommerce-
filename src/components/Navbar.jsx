import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'

const links = [
  { name: 'Rings', href: '/#products' },
  { name: 'Necklaces', href: '/#products' },
  { name: 'Earrings', href: '/#products' },
  { name: 'Bracelets', href: '/#products' },
  { name: 'Wedding Collection', href: '/collections/wedding' },
  { name: 'Journal', href: '/#products' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1]
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }} 
            className="flex items-center gap-2.5 group"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 bg-facet-gradient facet-badge group-hover:scale-110 transition-transform duration-300" />
            </span>
            <span className="font-display text-2xl tracking-tight text-ink">JEM</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={`text-sm font-medium transition-colors relative py-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                  location.pathname === l.href ? 'text-gold font-semibold after:w-full' : 'text-ink/70 hover:text-emerald'
                }`}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button aria-label="Search" className="hidden sm:inline-flex p-2 rounded-full hover:bg-ink/5 transition-colors text-ink/70 hover:text-ink">
              <Search size={19} />
            </button>
            <button aria-label="Wishlist" className="hidden sm:inline-flex p-2 rounded-full hover:bg-ink/5 transition-colors text-ink/70 hover:text-ink">
              <Heart size={19} />
            </button>
            <button aria-label="Cart" className="relative inline-flex p-2 rounded-full hover:bg-ink/5 transition-colors text-ink/70 hover:text-ink">
              <ShoppingBag size={19} />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-ruby text-[10px] leading-4 text-white text-center font-semibold">2</span>
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full hover:bg-ink/5 transition-colors text-ink/80"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-ivory px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link 
              key={l.name} 
              to={l.href} 
              onClick={(e) => handleLinkClick(e, l.href)} 
              className={`text-base font-medium transition-colors ${
                location.pathname === l.href ? 'text-gold font-semibold' : 'text-ink/80 hover:text-emerald'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
