import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Eye, ShoppingBag, X, Check, Heart, Shield, RefreshCw, Truck } from 'lucide-react'
import { weddingProducts } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import TiltCard from './TiltCard.jsx'
import { formatPrice } from '../utils/currency.js'
import ProductImageCarousel from './ProductImageCarousel.jsx'

// Three main collection cards for the top spotlight sections
const collectionHighlights = [
  {
    name: 'The Interlocking Cuff',
    category: 'Chain Bracelet',
    desc: 'Sleek geometric gold links embedded with solitaire micro-pave diamonds representing an eternal bond.',
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80',
    id: 'w3'
  }
]

export default function WeddingCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      {/* Premium Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#3B183F]">
        <div className="absolute inset-0 z-0 opacity-45 bg-cover bg-center mix-blend-overlay"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B183F] via-[#3B183F]/70 to-transparent z-10" />
        <div className="pointer-events-none absolute top-10 left-[8%] h-64 w-64 rounded-full bg-[#D4AF65]/15 blur-3xl animate-drift z-10" />
        <div className="pointer-events-none absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-[#6A3578]/15 blur-3xl animate-drift-slow z-10" />

        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          <span className="glass-panel-dark flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold mb-3 px-4 py-2 rounded-full bg-[#3B183F]/50 border border-[#D4AF65]/35">
            <Sparkles size={14} className="animate-spin duration-[3000ms]" /> Handcrafted Heirlooms <Sparkles size={14} className="animate-spin duration-[3000ms]" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            The Wedding Collection
          </h1>
          <p className="mt-6 text-sm sm:text-base text-white/85 font-body leading-relaxed max-w-xl">
            Exquisite bridal statements cast in precious solid gold and accented with brilliant starlight diamonds. Handcrafted meticulously for your forever.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF65] to-transparent" />
        </div>
      </section>

      {/* Wedding Jewellery Introduction Section */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 text-center py-16 lg:py-24 border-b border-[#E8D8EE]/60">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#6A3578] uppercase mb-2 block">Our Philosophy</span>
        <h2 className="font-display text-2xl sm:text-3xl text-[#211522] mb-6 font-medium">Designed for Forever</h2>
        <p className="text-sm text-[#211522]/70 leading-relaxed font-body">
          We believe that wedding jewellery should carry both weight and light. JEM’s designers and craftsmen select materials based on high-purity gold and clear solitaire diamonds. Each piece is hand-carved, maintaining structural integrity while achieving an extremely minimal silhouette for everyday elegance.
        </p>
      </section>

      {/* Core Bridal Suite Highlights */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16">
        <div className="border-b border-[#E8D8EE] pb-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#211522] font-semibold border-b-0">Core Bridal Suites</h2>
            <p className="text-xs text-[#211522]/55 mt-1 font-body">The foundational pillars of JEM bridal craftsmanship</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#6A3578] font-bold">Heirloom Catalog</span>
        </div>

        <div className="grid md:grid-cols-1 max-w-md mx-auto gap-8 perspective-1000 reveal-element">
          {collectionHighlights.map((col) => (
            <TiltCard
              key={col.id}
              max={8}
              className="group relative bg-white border border-[#E8D8EE] hover:border-[#D4AF65]/40 rounded-[2rem] overflow-hidden shadow-soft transition-all duration-500 flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#FCF8F2] relative tilt-layer-deep shadow-sm">
                <img 
                  src={col.img} 
                  alt={col.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B183F]/25 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[#3B183F] text-white rounded-full">
                  {col.category}
                </span>
              </div>
              <div className="p-6 flex flex-col items-start flex-grow premium-3d-inner bg-white">
                <h3 className="font-display text-xl text-[#211522] group-hover:text-[#6A3578] transition-colors duration-300 font-medium">
                  {col.name}
                </h3>
                <p className="text-xs text-[#211522]/60 font-body mt-2 leading-relaxed flex-grow">
                  {col.desc}
                </p>
                <Link 
                  to={`/product/${col.id}`}
                  className="mt-6 px-5 py-2.5 rounded-full border border-[#D4AF65] text-[#211522] hover:bg-[#6A3578] hover:text-white hover:border-[#6A3578] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 hover:scale-102 active:scale-95 self-stretch justify-center shadow-sm"
                >
                  Explore Collection <ArrowRight size={13} className="text-[#D4AF65] group-hover:text-white" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Featured Wedding Products Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-24">
        <div className="border-b border-[#E8D8EE] pb-6 mb-12">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#6A3578] uppercase">FEATURED PIECES</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#211522] mt-1.5 font-semibold">Bridal Product Catalog</h2>
          <p className="text-xs text-[#211522]/55 mt-1 font-body">Browse specifications, sizing options, and diamond grading details</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000 reveal-element">
          {weddingProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id)
            const isAdded = addedId === product.id

            return (
              <TiltCard
                key={product.id}
                max={6}
                className="group relative flex flex-col bg-white border border-[#E8D8EE] hover:border-[#D4AF65]/40 transition-colors duration-500 rounded-[2rem] overflow-hidden shadow-soft"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#FCF8F2] tilt-layer-deep shadow-sm">
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[#3B183F] text-white rounded-full">
                    {product.category}
                  </span>
                  
                  {product.tag && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[#D4AF65] text-[#3B183F] rounded-full">
                      {product.tag}
                    </span>
                  )}

                  <ProductImageCarousel 
                    images={product.images} 
                    alt={product.name} 
                    className="w-full h-full"
                  />

                  {/* Absolute overlay on Hover */}
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

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow bg-white premium-3d-inner">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6A3578] mb-1.5">
                    {product.material}
                  </span>
                  <Link to={`/product/${product.id}`} className="hover:text-[#6A3578] transition-colors">
                    <h3 className="font-display text-lg text-[#211522] group-hover:text-[#6A3578] transition-colors duration-300 min-h-[56px] leading-snug font-medium">
                      {product.name}
                    </h3>
                  </Link>
                  {product.code && (
                    <p className="text-[11px] text-[#211522]/55 mt-1 mb-2 font-body">Code: {product.code}</p>
                  )}
                  <p className="text-xs text-[#211522]/60 font-body mt-2 flex-grow line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#E8D8EE]/60 mt-6 pt-4">
                    <span className="font-display text-xl text-[#6A3578] font-bold">
                      {formatPrice(product)}
                    </span>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="text-xs font-semibold tracking-wider uppercase text-[#211522] hover:text-[#6A3578] transition-colors flex items-center gap-1.5"
                    >
                      {isAdded ? (
                        <>
                          <Check size={12} /> Added
                        </>
                      ) : (
                        <>
                          Add to Bag <ShoppingBag size={12} />
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

      {/* Trust Badges - Brand Promise */}
      <section className="relative bg-[#3B183F] text-white py-16 mt-24 overflow-hidden border-t border-[#D4AF65]/20">
        <div className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-[#D4AF65]/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-8 text-center relative z-10">
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65] bg-[#FCF8F2]/10 mb-4 animate-float-soft">
              <Shield size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Lifetime Authenticity</h4>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed font-body">
              Every heirloom piece comes with an individually numbered certificate of gold purity and diamond grading authenticity.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65] bg-[#FCF8F2]/10 mb-4 animate-float-soft" style={{ animationDelay: '0.6s' }}>
              <Truck size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Secure Insured Delivery</h4>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed font-body">
              Fully insured armored transit directly to your door, packaged in a custom handcrafted oak keepsake display box.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#D4AF65] bg-[#FCF8F2]/10 mb-4 animate-float-soft" style={{ animationDelay: '1.2s' }}>
              <RefreshCw size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Complimentary Resizing</h4>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed font-body">
              Free custom resizing and engraving on all bridal orders to ensure your heirloom fits you flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mt-24">
        <div className="relative bg-white rounded-[2rem] p-8 sm:p-16 border border-[#E8D8EE] shadow-soft text-center flex flex-col items-center overflow-hidden">
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#D4AF65]/10 blur-3xl animate-drift" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#6A3578] uppercase mb-2">Private Atelier Review</span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#211522] max-w-lg mb-4 font-medium border-b-0 pb-0">
            Bespoke Consultation
          </h2>
          <p className="text-xs sm:text-sm text-[#211522]/60 font-body leading-relaxed max-w-md mb-8">
            Schedule a virtual video call or a private viewing at our flagship studio to custom design your wedding bands.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] rounded-full text-xs font-semibold uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-md active:scale-95 duration-100"
          >
            Schedule Consultation <ArrowRight size={13} className="text-[#D4AF65]" />
          </Link>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#3B183F]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#FCF8F2] max-w-4xl w-full rounded-[2rem] overflow-hidden shadow-xl animate-in fade-in zoom-in duration-300 border border-[#D4AF65]/35 flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white hover:bg-[#3B183F] hover:text-white text-[#211522] transition-all hover:scale-105 border border-[#E8D8EE]"
            >
              <X size={18} />
            </button>

            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto min-h-[300px] relative bg-white border-r border-[#E8D8EE]/60">
              <ProductImageCarousel 
                images={selectedProduct.images} 
                alt={selectedProduct.name} 
                className="w-full h-full"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6A3578]">
                  {selectedProduct.category} • {selectedProduct.material}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#211522] mt-2 mb-4 leading-tight font-medium">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-[#211522]/75 leading-relaxed font-body mb-6">
                  {selectedProduct.description}
                </p>

                <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E8D8EE] mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#211522]/50">Carat Weight:</span>
                    <span className="text-[#211522] font-semibold">{selectedProduct.stones}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#211522]/50">Average Weight:</span>
                    <span className="text-[#211522] font-semibold">{selectedProduct.weight}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#211522]/50">Crafting Time:</span>
                    <span className="text-[#211522] font-semibold">4-5 Weeks (Custom Made)</span>
                  </div>
                </div>

                <h4 className="text-xs uppercase font-semibold tracking-wider text-[#211522]/50 mb-2">Exquisite Perks:</h4>
                <ul className="space-y-1.5 mb-8">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="text-xs text-[#211522]/80 flex items-center gap-2">
                      <Check size={14} className="text-[#6A3578] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 border-t border-[#E8D8EE] pt-6 mt-auto">
                <div className="text-2xl font-display font-semibold text-[#6A3578]">
                  {formatPrice(selectedProduct)}
                </div>
                <div className="flex-grow flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex-grow py-3 px-6 rounded-full bg-[#6A3578] hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] text-white text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100 shadow-sm"
                  >
                    {addedId === selectedProduct.id ? (
                      <>
                        <Check size={16} /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} /> Add to Cart
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    className={`p-3 rounded-full border transition-all ${
                      wishlist.includes(selectedProduct.id) 
                        ? 'border-[#6A3578] bg-[#E8D8EE] text-[#6A3578] shadow-sm' 
                        : 'border-[#E8D8EE] hover:border-[#6A3578] hover:text-[#6A3578] text-[#211522]/60 bg-white'
                    }`}
                  >
                    <Heart size={18} fill={wishlist.includes(selectedProduct.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
