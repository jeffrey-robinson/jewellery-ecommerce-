import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Heart, Search, ShoppingBag, X } from 'lucide-react'
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

const categories = ['necklace', 'kada', 'bracelet']

export default function ProductCatalog() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')
  const [category, setCategory] = useState(params.get('category') || 'necklace')
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    setQuery(params.get('q') || '')
    setCategory(params.get('category') || 'necklace')
  }, [params])

  const visibleProducts = useMemo(() => {
    const term = query.trim().toLowerCase()
    return catalogProducts.filter((product) =>
      (product.category?.toLowerCase() === category?.toLowerCase()) &&
      (!term || [product.name, product.category, product.code].filter(Boolean).some((field) => field.toLowerCase().includes(term)))
    )
  }, [category, query])

  const updateSearch = (value) => {
    setQuery(value)
    const next = new URLSearchParams()
    if (value) next.set('q', value)
    next.set('category', category)
    setParams(next, { replace: true })
  }

  const updateCategory = (value) => {
    setCategory(value)
    const next = new URLSearchParams()
    if (query) next.set('q', query)
    next.set('category', value)
    setParams(next, { replace: true })
  }

  return <section className="min-h-screen bg-gradient-to-b from-ivory to-white py-10 sm:py-16">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="max-w-2xl mb-8 reveal-element">
        <p className="text-xs font-semibold tracking-[.2em] text-gold uppercase">JEM collection</p>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3">Find your signature piece.</h1>
        <div className="relative mt-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/45" size={20} />
          <input value={query} onChange={(event) => updateSearch(event.target.value)} placeholder="Search necklaces, bracelets, product codes…" className="w-full rounded-2xl border border-ink/10 bg-white py-4 pl-12 pr-11 text-ink shadow-sm outline-none focus:border-gold focus:ring-4 focus:ring-gold/10" />
          {query && <button onClick={() => updateSearch('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-ink/50 hover:bg-ink/5"><X size={18} /></button>}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 reveal-element" aria-label="Product categories">
        {categories.map((item) => <button key={item} onClick={() => updateCategory(item)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${category === item ? 'bg-ink text-white' : 'bg-white border border-ink/10 text-ink/65 hover:border-gold'}`}>{formatCategoryDisplay(item)}</button>)}
      </div>
      <p className="mb-5 text-sm text-ink/55">{visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'} found</p>

      {visibleProducts.length ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 reveal-element">
        {visibleProducts.map((product) => <article key={product.id} className="group overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
            <Link to={`/product/${product.id}`} className="block w-full h-full"><ProductImageCarousel images={product.images} alt={product.name} /></Link>
            <button onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)} aria-label="Toggle wishlist" className={`absolute right-3 top-3 rounded-full p-2.5 shadow ${isInWishlist(product.id) ? 'bg-ruby text-white' : 'bg-white text-ink/70'}`}><Heart size={17} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} /></button>
          </div>
          <div className="p-4">
            <p className="text-xs text-ink/45">{formatCategoryDisplay(product.category)}</p>
            <Link to={`/product/${product.id}`} className="mt-1 block min-h-12 font-display text-lg leading-snug text-ink hover:text-gold">
              {product.name}
            </Link>
            {product.code && (
              <p className="text-[11px] text-ink/50 mt-1 font-body">Code: {product.code}</p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gold">{formatPrice(product)}</span>
              <button onClick={() => addToCart(product)} className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-dark">
                <ShoppingBag size={15} /> Add
              </button>
            </div>
          </div>
        </article>)}
      </div> : <div className="rounded-2xl border border-dashed border-ink/20 bg-white p-14 text-center"><p className="font-display text-2xl text-ink">No pieces match that search.</p><button onClick={() => { updateSearch(''); updateCategory('necklace') }} className="mt-4 text-sm font-semibold text-gold">Reset filters</button></div>}
    </div>
  </section>
}
