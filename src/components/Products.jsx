import { useState, useMemo } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { products } from '../data/content.js'

const filters = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets']

const tagStyle = {
  Bestseller: 'bg-gold/15 text-gold-dark',
  New: 'bg-emerald/15 text-emerald-dark',
}

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-[0.18em] text-emerald-dark">THE COLLECTION</span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3">Pieces worth pausing for.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  active === f
                    ? 'bg-ink text-ivory border-ink'
                    : 'text-ink/60 border-ink/15 hover:border-ink/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-3xl overflow-hidden bg-ivory border border-ink/5 hover:shadow-soft transition-shadow duration-300"
            >
              {p.tag && (
                <span className={`absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${tagStyle[p.tag]}`}>
                  {p.tag}
                </span>
              )}
              <button
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-ink/60 hover:text-ruby transition-colors"
              >
                <Heart size={15} />
              </button>

              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-wide text-ink/40">{p.category}</p>
                <h3 className="font-display text-base sm:text-lg text-ink mt-1 leading-snug">{p.name}</h3>

                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg text-ink">${p.price}</span>
                    {p.oldPrice && (
                      <span className="text-xs text-ink/40 line-through">${p.oldPrice}</span>
                    )}
                  </div>
                  <button
                    aria-label={`Add ${p.name} to bag`}
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-ink text-ivory hover:bg-emerald-dark transition-colors"
                  >
                    <ShoppingBag size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
