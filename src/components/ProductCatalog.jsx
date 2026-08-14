import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
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
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
}

export default function ProductCatalog() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
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

  const categories = ['necklace', 'kada', 'bracelet', 'wedding']

  const updateSearch = (val) => {
    setQuery(val)
  }

  const updateCategory = (val) => {
    setCategory(val)
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
    <section className="bg-ivory min-h-screen pb-20 pt-8 text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl reveal-element">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Handmade jewelry</span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3">Find your signature piece.</h1>
          <div className="flex items-center gap-2 text-gold mt-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
          
          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/45" size={20} />
            <input value={query} onChange={(event) => updateSearch(event.target.value)} placeholder="Search necklaces, bracelets, product codes…" className="w-full rounded-2xl border border-ink/10 bg-white py-4 pl-12 pr-11 text-ink shadow-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/10" />
            {query && <button onClick={() => updateSearch('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-ink/50 hover:bg-ink/5"><X size={18} /></button>}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 reveal-element" aria-label="Product categories">
          {categories.map((item) => (
            <button 
              key={item} 
              onClick={() => updateCategory(item)} 
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === item 
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white shadow-sm' 
                  : 'bg-white border border-ink/10 text-ink/65 hover:border-[#D97706] hover:text-[#D97706]'
              }`}
            >
              {formatCategoryDisplay(item)}
            </button>
          ))}
        </div>
        <p className="mb-5 text-sm text-ink/55">{visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'} found</p>

        {visibleProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 reveal-element">
            {visibleProducts.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                  <Link to={`/product/${product.id}`} className="block w-full h-full">
                    <ProductImageCarousel images={product.images} alt={product.name} />
                  </Link>
                  <button 
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)} 
                    aria-label="Toggle wishlist" 
                    className={`absolute right-3 top-3 rounded-full p-2.5 shadow ${
                      isInWishlist(product.id) ? 'bg-ruby text-white' : 'bg-white text-ink/70 hover:text-ruby'
                    }`}
                  >
                    <Heart size={17} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs text-ink/45">{formatCategoryDisplay(product.category)}</p>
                  <Link to={`/product/${product.id}`} className="mt-1 block min-h-12 font-display text-lg leading-snug text-ink hover:text-[#D97706]">
                    {product.name}
                  </Link>
                  {product.code && (
                    <p className="text-[11px] text-ink/50 mt-1 font-body">Code: {product.code}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-gold">{formatPrice(product)}</span>
                    <button 
                      onClick={() => addToCart(product)} 
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-3 py-2 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-sm"
                    >
                      <ShoppingBag size={15} /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-white p-14 text-center">
            <p className="font-display text-2xl text-ink">No pieces match that search.</p>
            <button onClick={() => { updateSearch(''); updateCategory('necklace') }} className="mt-4 text-sm font-semibold text-[#D97706] hover:underline">
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
