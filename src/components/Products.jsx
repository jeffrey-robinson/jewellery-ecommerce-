import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Check } from 'lucide-react'
import { products } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { formatPrice } from '../utils/currency.js'

const filters = ['All', 'Necklace', 'Kada', 'Chain Bracelet']

const tagStyle = {
  Bestseller: 'bg-gold/15 text-gold-dark',
  New: 'bg-emerald/15 text-emerald-dark',
}

export default function Products() {
  const [active, setActive] = useState('All')
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [addedId, setAddedId] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  const handleAddClick = (p) => {
    addToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 2000)
  }

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-3xl overflow-hidden bg-ivory border border-ink/5 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between premium-3d-card shadow-soft-3d"
            >
              {p.tag && (
                <span className={`absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${tagStyle[p.tag]}`}>
                  {p.tag}
                </span>
              )}
              <button
                onClick={() => isInWishlist(p.id) ? removeFromWishlist(p.id) : addToWishlist(p)}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 text-ink/60 hover:text-ruby transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200"
              >
                <Heart size={15} fill={isInWishlist(p.id) ? 'currentColor' : 'none'} className={isInWishlist(p.id) ? 'text-ruby' : ''} />
              </button>

              <Link to={`/product/${p.id}`} className="block overflow-hidden aspect-[4/5] bg-white premium-3d-deep">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>

              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between premium-3d-inner">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-ink/40">{p.category}</p>
                  <Link to={`/product/${p.id}`} className="hover:text-gold transition-colors block">
                    <h3 className="font-display text-base sm:text-lg text-ink mt-1 leading-snug">{p.name}</h3>
                  </Link>

                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-ink/5 pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg text-ink">{formatPrice(p)}</span>
                    {p.oldPrice && (
                      <span className="text-xs text-ink/40 line-through">{formatPrice({ ...p, price: p.oldPrice })}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddClick(p)}
                    aria-label={`Add ${p.name} to bag`}
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-ink text-ivory hover:bg-emerald-dark transition-all duration-300 hover:scale-105 active:scale-90"
                  >
                    {addedId === p.id ? <Check size={14} className="text-emerald-light" /> : <ShoppingBag size={15} />}
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
