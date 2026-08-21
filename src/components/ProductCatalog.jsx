import { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Search, X, Heart, ShoppingBag, Gem } from 'lucide-react'
import { catalogProducts } from '../data/content.js'
import { formatPrice } from '../utils/currency.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductImageCarousel from './ProductImageCarousel.jsx'

const formatCategoryDisplay = (cat) => {
  if (!cat) return ''
  const lower = cat.toLowerCase()
  if (lower === 'chain-bracelet') return 'Chain Bracelet'
  if (lower === 'jewel bags' || lower === 'jewel-bags') return 'Jewel Bags'
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
}

export default function ProductCatalog() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const navigate = useNavigate()
  
  const [category, setCategory] = useState('necklace')
  const [query, setQuery] = useState(initialQuery)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const q = searchParams.get('q') || ''
    setQuery(q)
  }, [searchParams])

  const categories = ['necklace', 'kada', 'bracelet', 'jewel bags']

  const updateSearch = (val) => {
    setQuery(val)
  }

  const updateCategory = (val) => {
    if (val === 'jewel bags') {
      navigate('/jewel-bags')
    } else {
      setCategory(val)
    }
  }

  const visibleProducts = catalogProducts.filter((product) => {
    const term = query.trim().toLowerCase()
    const matchesQuery = term
      ? product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        (product.code && product.code.toLowerCase().includes(term))
      : true
    const matchesCategory = product.category.toLowerCase() === category.toLowerCase()
    return matchesQuery && matchesCategory
  })

  return (
    <section className="bg-[#FCF8F2] min-h-screen pb-24 pt-8 text-[#211522]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl reveal-element">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6A3578]">Handmade Jewelry</span>
          <h1 className="font-display text-4xl sm:text-5xl text-[#211522] mt-3">Find Your Signature Piece</h1>
          <div className="flex items-center gap-2 text-[#D4AF65] mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF65]" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF65]" />
          </div>
          
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#211522]/45" size={20} />
            <input value={query} onChange={(event) => updateSearch(event.target.value)} placeholder="Search necklaces, bracelets, jewel bags, product codes…" className="w-full rounded-2xl border border-[#D4AF65]/30 bg-white py-4 pl-12 pr-11 text-[#211522] shadow-sm outline-none focus:border-[#6A3578] focus:ring-1 focus:ring-[#6A3578]/25" />
            {query && <button onClick={() => updateSearch('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#211522]/50 hover:bg-[#211522]/5"><X size={18} /></button>}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 reveal-element" aria-label="Product categories">
          {categories.map((item) => (
            <button 
              key={item} 
              onClick={() => updateCategory(item)} 
              className={`rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                category === item 
                  ? 'bg-[#6A3578] text-white border border-[#6A3578] shadow-md' 
                  : 'bg-white border border-[#D4AF65]/35 text-[#211522]/70 hover:border-[#6A3578] hover:text-[#6A3578]'
              }`}
            >
              {formatCategoryDisplay(item)}
            </button>
          ))}
        </div>
        <p className="mb-6 text-sm text-[#211522]/55 font-body">{visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'} found</p>

        {visibleProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal-element">
            {visibleProducts.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-[#E8D8EE] bg-white shadow-soft transition-all duration-500 hover:border-[#D4AF65]/40 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#FCF8F2]">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <ProductImageCarousel images={product.images} alt={product.name} />
                  </Link>
                  <button 
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)} 
                    aria-label="Toggle wishlist" 
                    className={`absolute right-4 top-4 rounded-full p-2.5 shadow-sm border border-[#E8D8EE] ${
                      isInWishlist(product.id) ? 'bg-[#6A3578] text-white border-[#6A3578]' : 'bg-white/95 text-[#211522]/75 hover:text-[#6A3578]'
                    }`}
                  >
                    <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#6A3578]/70">{formatCategoryDisplay(product.category)}</p>
                  <Link to={`/product/${product.id}`} className="mt-1.5 block min-h-12 font-display text-lg leading-snug text-[#211522] hover:text-[#6A3578] font-medium transition-colors">
                    {product.name}
                  </Link>
                  {product.code && (
                    <p className="text-[11px] text-[#211522]/50 mt-1 font-body">Code: {product.code}</p>
                  )}
                  <div className="mt-5 flex items-center justify-between border-t border-[#E8D8EE]/60 pt-3.5">
                    <span className="font-semibold text-[#6A3578] font-display text-lg">{formatPrice(product)}</span>
                    <button 
                      onClick={() => addToCart(product)} 
                      className="inline-flex items-center gap-2 rounded-full bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/20 hover:border-[#D4AF65] px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                    >
                      <ShoppingBag size={14} /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[#D4AF65]/35 bg-white p-14 text-center shadow-soft">
            <p className="font-display text-2xl text-[#211522]">No pieces match that search.</p>
            <button onClick={() => { updateSearch(''); updateCategory('necklace') }} className="mt-4 text-sm font-semibold text-[#6A3578] hover:text-[#3B183F] hover:underline uppercase tracking-wider">
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
