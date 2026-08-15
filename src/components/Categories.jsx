import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    name: 'NECKLACES',
    href: '/collections/necklace',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    desc: 'Delicate statements of light'
  },
  {
    name: 'KADAS',
    href: '/collections/kada',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    desc: 'Structural solid cuffs'
  },
  {
    name: 'BRACELETS',
    href: '/collections/bracelet',
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80',
    desc: 'Faceted fluid chains'
  },
  {
    name: 'WEDDING SUITE',
    href: '/collections/wedding',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    desc: 'Handcrafted bridal heirlooms'
  }
]

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 bg-[#FCF8F2]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6A3578] uppercase">Atelier Curations</span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#211522] mt-3">Our Collections</h2>
        </div>
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#6A3578] hover:text-[#3B183F] group transition-colors duration-300"
        >
          Explore All Pieces 
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-[#D4AF65]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
        {collections.map((c) => (
          <Link
            to={c.href}
            key={c.name}
            className="group relative rounded-[2rem] overflow-hidden bg-white border border-[#D4AF65]/15 premium-3d-card shadow-soft hover:shadow-xl transition-all duration-500"
          >
            <div className="relative aspect-[3/4] overflow-hidden premium-3d-deep">
              <img
                src={c.img}
                alt={c.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Luxury dark gradient overlay over bottom of the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B183F]/90 via-[#3B183F]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-10" />
            </div>
            
            {/* Overlay Text Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end premium-3d-inner">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF65] uppercase mb-1">
                {c.desc}
              </span>
              <h3 className="font-display text-xl text-white tracking-wide group-hover:text-[#D4AF65] transition-colors duration-300">
                {c.name}
              </h3>
              
              <div className="mt-4 flex items-center gap-1.5 text-xs text-white/80 font-medium group-hover:text-white transition-colors">
                <span>View Collection</span>
                <ArrowRight size={13} className="text-[#D4AF65] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
