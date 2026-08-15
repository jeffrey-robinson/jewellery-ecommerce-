import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star, Check } from 'lucide-react'
import { products } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { formatPrice } from '../utils/currency.js'
import ProductImageCarousel from './ProductImageCarousel.jsx'

const filters = ['All', 'Necklace', 'Kada', 'Chain Bracelet']

const tagStyle = {
  Bestseller: 'bg-[#D4AF65]/15 text-[#B38B3E]',
  New: 'bg-[#E8D8EE] text-[#6A3578]',
}

export default function Products() {
  const [active, setActive] = useState('All')
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [addedId, setAddedId] = useState(null)

  const filtered = useMemo(() => {
    if (active === 'All') return products
    const activeLower = active.toLowerCase()
    return products.filter((p) => {
      const pCat = p.category?.toLowerCase()
      if (activeLower === 'chain bracelet' || activeLower === 'bracelet') {
        return pCat === 'bracelet' || pCat === 'chain-bracelet' || pCat === 'chain bracelet'
      }
      return pCat === activeLower
    })
  }, [active])

  const handleAddClick = (p) => {
    addToCart(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 2000)
  }

  return (
    <section id="products" className="bg-[#FCF8F2] py-24 border-t border-[#D4AF65]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#6A3578] uppercase">The Collection</span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#211522] mt-3">Featured Jewellery</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  active === f
                    ? 'bg-[#6A3578] text-white border border-[#6A3578] shadow-md'
                    : 'bg-white text-[#211522]/70 border border-[#D4AF65]/30 hover:border-[#6A3578] hover:text-[#6A3578]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 perspective-1000">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-[#E8D8EE] hover:border-[#D4AF65]/50 transition-all duration-500 flex flex-col justify-between premium-3d-card shadow-soft"
            >
              {p.tag && (
                <span className={`absolute top-3 left-3 z-10 text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${tagStyle[p.tag]} shadow-sm`}>
                  {p.tag}
                </span>
              )}
              <button
                onClick={() => isInWishlist(p.id) ? removeFromWishlist(p.id) : addToWishlist(p)}
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-white/95 text-[#211522]/60 hover:text-red-500 border border-[#E8D8EE] transition-colors shadow-sm hover:scale-105 active:scale-95 duration-200"
              >
                <Heart size={15} fill={isInWishlist(p.id) ? '#EF4444' : 'none'} className={isInWishlist(p.id) ? 'text-red-500' : ''} />
              </button>

              <Link to={`/product/${p.id}`} className="block overflow-hidden aspect-[4/5] bg-white premium-3d-deep relative">
                <ProductImageCarousel images={p.images} alt={p.name} />
                <div className="absolute inset-0 bg-[#3B183F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>

              <div className="p-5 flex-grow flex flex-col justify-between bg-white premium-3d-inner">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#6A3578]/70">
                    {p.category === 'bracelet' ? 'Chain Bracelet' : p.category}
                  </p>
                  <Link to={`/product/${p.id}`} className="hover:text-[#6A3578] transition-colors block">
                    <h3 className="font-display text-base sm:text-lg text-[#211522] mt-1.5 leading-snug font-medium line-clamp-2 min-h-[3rem]">{p.name}</h3>
                  </Link>

                  <div className="flex items-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="fill-[#D4AF65] text-[#D4AF65]" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-[#E8D8EE]/60 pt-3.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg text-[#6A3578] font-bold">{formatPrice(p)}</span>
                    {p.oldPrice && (
                      <span className="text-xs text-[#211522]/40 line-through">{formatPrice({ ...p, price: p.oldPrice })}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddClick(p)}
                    aria-label={`Add ${p.name} to bag`}
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/20 hover:border-[#D4AF65] transition-all duration-300 hover:scale-105 active:scale-90"
                  >
                    {addedId === p.id ? <Check size={14} className="text-white" /> : <ShoppingBag size={15} />}
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
