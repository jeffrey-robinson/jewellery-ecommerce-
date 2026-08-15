import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Eye, ShoppingBag, X, Check, Heart } from 'lucide-react'
import { products } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import TiltCard from './TiltCard.jsx'
import ProductImageCarousel from './ProductImageCarousel.jsx'

export default function BraceletCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter products to get only the unique Chain Bracelets
  const braceletItems = products.filter((p) => p.category?.toLowerCase() === 'chain-bracelet' || p.category?.toLowerCase() === 'chain bracelet' || p.category?.toLowerCase() === 'bracelet')

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
    <div className="bg-[#FCF8F2] min-h-screen text-[#211522] pb-24">
      {/* Page Header */}
      <section className="bg-[#3B183F] text-white py-20 relative overflow-hidden border-b border-[#D4AF65]/20">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF65_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-[#6A3578]/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold mb-3 inline-block">
            Modern Curation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            The Bracelet Collection
          </h1>
          <p className="mt-4 text-sm text-white/70 max-w-lg mx-auto font-body leading-relaxed">
            Explore JEM's delicate and structural chain bracelets. Cast in gold-plated and rose gold-plated finishes, featuring anti-tarnish protection and luxury charms.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24">
        <div className="border-b border-[#E8D8EE] pb-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl text-[#211522] font-semibold">Explore Charm & Link Bracelets</h2>
            <p className="text-xs text-[#211522]/50 mt-1 font-body">Refined details, sparkling charms, and comfort-fit closures</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#6A3578] font-bold">
            {braceletItems.length} Designs
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000 reveal-element">
          {braceletItems.map((product) => {
            const isWishlisted = wishlist.includes(product.id)
            const isAdded = addedId === product.id

            return (
              <TiltCard
                key={product.id}
                max={6}
                className="group relative flex flex-col bg-white border border-[#E8D8EE] hover:border-[#D4AF65]/40 transition-colors duration-500 rounded-[2rem] overflow-hidden shadow-soft"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#FCF8F2] tilt-layer-deep shadow-sm">
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-bold tracking-wider uppercase bg-[#3B183F] text-white rounded-full">
                    {product.category}
                  </span>
                  
                  {product.code && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-[9px] font-bold tracking-wider uppercase bg-[#D4AF65] text-[#3B183F] rounded-full">
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
                    className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-white/95 text-[#211522]/75 hover:text-red-500 shadow-sm hover:scale-105 active:scale-95 duration-200 transition-all border border-[#E8D8EE]"
                    aria-label="Wishlist"
                  >
                    <Heart size={14} fill={isWishlisted ? '#EF4444' : 'none'} className={isWishlisted ? 'text-[#6A3578]' : ''} />
                  </button>

                  {/* Absolute Hover Action Overlay */}
                  <div className="absolute inset-0 bg-[#3B183F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      aria-label="Quick View" 
                      className="p-3 bg-white hover:bg-[#D4AF65] hover:text-[#3B183F] text-[#3B183F] rounded-full transition-colors shadow-lg duration-300 hover:scale-105 active:scale-95"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      aria-label="Add to Cart" 
                      className="p-3 bg-white hover:bg-[#6A3578] hover:text-white text-[#6A3578] rounded-full transition-colors shadow-lg duration-300 hover:scale-105 active:scale-95"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Details Frame */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white premium-3d-inner">
                  <div className="space-y-2">
                    <Link to={`/product/${product.id}`} className="hover:text-[#6A3578] transition-colors">
                      <h3 className="font-display text-base text-[#211522] group-hover:text-[#6A3578] transition-colors duration-300 min-h-[48px] leading-snug line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    {product.code && (
                      <p className="text-[11px] text-[#211522]/55 font-body">Code: {product.code}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E8D8EE]/60 mt-5 pt-3.5">
                    <span className="font-display text-lg text-[#6A3578] font-bold">
                      {product.currency === '₹' ? `₹${product.price}` : `$${product.price}`}
                    </span>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="text-[10px] font-bold tracking-wider uppercase text-[#211522] hover:text-[#6A3578] transition-colors flex items-center gap-1.5"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B183F]/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FCF8F2] rounded-[2rem] max-w-2xl w-full overflow-hidden border border-[#D4AF65]/35 shadow-xl relative flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/95 text-[#211522]/75 hover:bg-[#3B183F] hover:text-white transition-all shadow-md border border-[#E8D8EE]"
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
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6A3578]">
                  {selectedProduct.category} {selectedProduct.code && `• Code: ${selectedProduct.code}`}
                </span>
                <h3 className="font-display text-2xl text-[#211522] mt-1.5 leading-tight font-medium">{selectedProduct.name}</h3>
                <p className="text-xs text-[#211522]/60 font-body leading-relaxed mt-4">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#E8D8EE] pt-4 mt-6">
                <span className="font-display text-2xl text-[#6A3578] font-bold">
                  {selectedProduct.currency === '₹' ? `₹${selectedProduct.price}` : `$${selectedProduct.price}`}
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="px-5 py-2.5 rounded-full bg-[#6A3578] hover:bg-[#3B183F] text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Add to Cart
                  </button>
                  <Link 
                    to={`/product/${selectedProduct.id}`}
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 rounded-full bg-white border border-[#D4AF65] hover:bg-[#E8D8EE]/30 text-[#211522] text-xs font-semibold uppercase tracking-widest transition-colors text-center shadow-sm"
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
