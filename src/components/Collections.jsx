import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const colorThemes = {
  emerald: 'from-emerald/25 to-emerald/0 text-emerald-dark',
  ruby: 'from-ruby/25 to-ruby/0 text-ruby-dark',
  gold: 'from-gold/30 to-gold/0 text-gold-dark',
}

const customCollections = [
  {
    name: 'Necklace',
    count: '3 pieces',
    color: 'ruby',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    href: '/product/w1'
  },
  {
    name: 'Kada',
    count: '3 pieces',
    color: 'emerald',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    href: '/product/w2'
  },
  {
    name: 'Chain Bracelet',
    count: '3 pieces',
    color: 'gold',
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80',
    href: '/product/w3'
  }
]

export default function Collections() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Premium Header */}
      <section className="bg-ink text-ivory py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
            Curated Lines
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Our Collections
          </h1>
          <p className="mt-4 text-sm text-ivory/65 max-w-lg mx-auto font-body leading-relaxed">
            From everyday gold staples to hand-cut heritage sets. Discover jewellery crafted for subtle shine and timeless wear.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16">
        
        {/* Spotlight: Wedding Collection */}
        <div className="relative rounded-3xl overflow-hidden bg-ink text-ivory mb-16 shadow-soft group border border-gold/15">
          <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent z-10" />
          
          <div className="relative z-20 p-8 sm:p-12 lg:p-16 max-w-xl flex flex-col items-start justify-center min-h-[350px]">
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold mb-3">
              <Sparkles size={13} className="animate-pulse" /> Limited Release <Sparkles size={13} className="animate-pulse" />
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory tracking-tight mb-4">
              The Wedding Collection
            </h2>
            <p className="text-sm text-ivory/70 font-body leading-relaxed mb-8">
              A bespoke curation of fine Necklaces, heritage Kadas, and interlocking Chain Bracelets. Hand-finished in solid gold and starlight diamonds for your memorable days.
            </p>
            <Link 
              to="/collections/wedding" 
              className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-ink text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 group-hover:scale-[1.02] duration-300 shadow-lg active:scale-95"
            >
              Explore Collection <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="border-b border-ink/10 pb-6 mb-10 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl text-ink">Shop by Category</h2>
            <p className="text-xs text-ink/50 mt-0.5">Explore pieces designed for clean, everyday light</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-ink/40 font-semibold">
            {customCollections.length} Categories
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 perspective-1000">
          {customCollections.map((c) => (
            <Link
              to={c.href}
              key={c.name}
              className="group relative rounded-3xl overflow-hidden bg-white border border-ink/5 hover:border-gold/20 transition-all duration-500 flex flex-col justify-between premium-3d-card shadow-soft-3d"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colorThemes[c.color]} opacity-70 z-10`} />
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory premium-3d-deep shadow-sm">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative p-5 bg-white z-20 flex items-center justify-between border-t border-ink/5 premium-3d-inner">
                <div>
                  <h3 className="font-display text-lg text-ink group-hover:text-gold transition-colors duration-300">{c.name}</h3>
                  <p className="text-xs text-ink/50 mt-0.5">{c.count}</p>
                </div>
                <div className="h-8 w-8 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
