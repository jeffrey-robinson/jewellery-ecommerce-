import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/collections' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()

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

  const submitSearch = (event) => {
    event.preventDefault()
    const value = query.trim()
    navigate(value ? `/collections?q=${encodeURIComponent(value)}` : '/collections')
    setSearchOpen(false)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#3B183F] backdrop-blur-md border-b border-[#D4AF65]/20 shadow-sm text-white">
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
            className="flex items-center gap-2 group"
          >
            <img 
              src="https://res.cloudinary.com/djqflcckm/image/upload/v1786556786/logo_image_asmv3g.jpg" 
              alt="Brand Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-cover hover:scale-[1.03] transition-transform duration-300 rounded-full border border-[#D4AF65]/35 shadow-glow"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
                className={`text-sm font-medium transition-colors relative py-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF65] after:transition-all hover:after:w-full ${
                  location.pathname === l.href ? 'text-[#D4AF65] font-semibold after:w-full' : 'text-white hover:text-[#D4AF65]'
                }`}
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search the collection" aria-expanded={searchOpen} className="inline-flex p-2 rounded-full hover:bg-white/10 transition-colors text-white/85 hover:text-[#D4AF65]">
              <Search size={19} />
            </button>
            <Link 
              to="/wishlist" 
              aria-label="Wishlist" 
              className="relative inline-flex p-2 rounded-full hover:bg-white/10 transition-colors text-white/85 hover:text-[#D4AF65]"
              title="My Wishlist"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[#D4AF65] text-[10px] leading-4 text-[#3B183F] text-center font-bold animate-pulse">{wishlistCount}</span>
              )}
            </Link>
            <Link 
              to="/cart" 
              aria-label="Cart" 
              className="relative inline-flex p-2 rounded-full hover:bg-white/10 transition-colors text-white/85 hover:text-[#D4AF65]"
              title="Shopping Cart"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[#6A3578] text-[10px] leading-4 text-white text-center font-semibold animate-pulse">{cartCount}</span>
              )}
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white/85"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <form onSubmit={submitSearch} className="border-t border-[#D4AF65]/20 bg-[#FCF8F2] px-5 py-3">
          <div className="relative mx-auto max-w-3xl">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#211522]/55" />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" className="w-full rounded-xl border border-[#211522]/15 bg-white py-2.5 pl-10 pr-4 text-sm text-[#211522] outline-none focus:border-[#D4AF65]" />
          </div>
        </form>
      )}

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-[#D4AF65]/20 bg-[#3B183F] px-5 py-4 flex flex-col gap-4 shadow-xl">
          {links.map((l) => (
            <Link 
              key={l.name} 
              to={l.href} 
              onClick={(e) => handleLinkClick(e, l.href)} 
              className={`text-base font-medium transition-colors ${
                location.pathname === l.href ? 'text-[#D4AF65] font-semibold' : 'text-white/80 hover:text-[#D4AF65]'
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Link to="/admin/login" onClick={() => setOpen(false)} className="text-base font-medium text-white/80 hover:text-[#D4AF65]">Admin</Link>
        </nav>
      )}
    </header>
  )
}
