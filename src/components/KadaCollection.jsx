import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Eye, ShoppingBag, X, Check, Heart } from 'lucide-react'
import { products } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import TiltCard from './TiltCard.jsx'
import ProductImageCarousel from './ProductImageCarousel.jsx'

export default function KadaCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter products to get only the 8 unique Kadas
  const kadaItems = products.filter((p) => p.category === 'Kada' && String(p.id).startsWith('K00'))

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id))
    } else {
      setWishlist([...wishlist, id])
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product, 1)
    setAddedId(product.id)
    setTimeout(() => {
      setAddedId(null)
    }, 2000)
  }

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Page Header */}
      <section className="bg-ink text-ivory py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-emerald/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
            Elite Curation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            The Kada Collection
          </h1>
          <p className="mt-4 text-sm text-ivory/65 max-w-lg mx-auto font-body leading-relaxed">
            Discover JEM's masterfully textured Kadas. Handcrafted in solid gold-plated and rose gold-plated finishes with long-lasting anti-tarnish protection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24">
        <div className="border-b border-ink/10 pb-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl text-ink">Explore Traditional & Modern cuffs</h2>
            <p className="text-xs text-ink/50 mt-1 font-body">Solid structures, delicate textures, and comfort-engineered closures</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-gold font-semibold">
            {kadaItems.length} Designs
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
          {kadaItems.map((product) => {
            const isWishlisted = wishlist.includes(product.id)
            const isAdded = addedId === product.id

            return (
              <TiltCard
                key={product.id}
                max={6}
                className="group relative flex flex-col bg-white border border-ink/5 hover:border-gold/20 transition-colors duration-500 rounded-2xl overflow-hidden shadow-soft-3d"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-ivory tilt-layer-deep shadow-sm">
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider bg-ink text-ivory rounded-full">
                    {product.category}
                  </span>
                  
                  {product.code && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider bg-gold text-ink rounded-full">
                      Code: {product.code}
                    </span>
                  )}

                  <ProductImageCarousel 
                    images={product.images} 
                    alt={product.name} 
                    className="w-full h-full"
                  />

                  {/* Wishlist Heart Button */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-white/95 text-ink/65 hover:text-ruby shadow-sm hover:scale-105 active:scale-95 duration-200 transition-all border border-ink/5"
                    aria-label="Wishlist"
                  >
                    <Heart size={14} fill={isWishlisted ? '#B23A48' : 'none'} className={isWishlisted ? 'text-ruby' : ''} />
                  </button>

                  {/* Absolute Hover Action Overlay */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      aria-label="Quick View" 
                      className="p-3 bg-white hover:bg-gold hover:text-ink text-ink rounded-full transition-colors shadow-lg duration-300 hover:scale-105 active:scale-95"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      aria-label="Add to Cart" 
                      className="p-3 bg-white hover:bg-gold hover:text-ink text-ink rounded-full transition-colors shadow-lg duration-300 hover:scale-105 active:scale-95"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Details Frame */}
                <div className="p-5 flex flex-col flex-grow justify-between tilt-layer-inner">
                  <div className="space-y-2">
                    <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
                      <h3 className="font-display text-base text-ink group-hover:text-gold transition-colors duration-300 min-h-[48px] leading-snug line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/5 mt-5 pt-3">
                    <span className="font-display text-lg text-ink font-semibold">
                      {product.currency === '₹' ? `₹${product.price}` : `$${product.price}`}
                    </span>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="text-[10px] font-bold tracking-wider uppercase text-ink hover:text-gold transition-colors flex items-center gap-1"
                    >
                      {isAdded ? (
                        <>
                          <Check size={11} /> Added
                        </>
                      ) : (
                        <>
                          Add <ShoppingBag size={11} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </section>

      {/* Quick View Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-ivory rounded-3xl max-w-2xl w-full overflow-hidden border border-gold/20 shadow-soft relative flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/95 text-ink/75 hover:bg-ink hover:text-ivory transition-all shadow-md"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Left side Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-96 overflow-hidden bg-white">
              <ProductImageCarousel images={selectedProduct.images} alt={selectedProduct.name} className="w-full h-full" />
            </div>

            {/* Right side Details */}
            <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                  {selectedProduct.category} {selectedProduct.code && `• Code: ${selectedProduct.code}`}
                </span>
                <h3 className="font-display text-2xl text-ink mt-1.5 leading-tight">{selectedProduct.name}</h3>
                <p className="text-xs text-ink/60 font-body leading-relaxed mt-4">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-ink/10 pt-4 mt-6">
                <span className="font-display text-2xl text-ink font-semibold">
                  {selectedProduct.currency === '₹' ? `₹${selectedProduct.price}` : `$${selectedProduct.price}`}
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="px-5 py-2.5 rounded-full bg-ink hover:bg-emerald-dark text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Add to Cart
                  </button>
                  <Link 
                    to={`/product/${selectedProduct.id}`}
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-ink text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
