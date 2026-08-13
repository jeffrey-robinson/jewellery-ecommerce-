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
    name: 'The Bridal Choker',
    category: 'Necklace',
    desc: 'An exquisite collar choker detailed with intricate leaf patterns and hand-faceted starlight diamonds.',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    id: 'w1'
  },
  {
    name: 'The Heritage Kada',
    category: 'Kada',
    desc: 'A magnificent antique-brushed bangle capturing royal traditions in a modern lightweight structure.',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    id: 'w2'
  },
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
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Premium Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0 opacity-45 bg-cover bg-center mix-blend-overlay"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent z-10" />
        <div className="pointer-events-none absolute top-10 left-[8%] h-64 w-64 rounded-full bg-gold/15 blur-3xl animate-drift z-10" />
        <div className="pointer-events-none absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-ruby/15 blur-3xl animate-drift-slow z-10" />

        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          <span className="glass-panel-dark flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3 px-4 py-2 rounded-full">
            <Sparkles size={14} className="animate-spin duration-[3000ms]" /> Handcrafted Heirlooms <Sparkles size={14} className="animate-spin duration-[3000ms]" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-tight">
            The Wedding Collection
          </h1>
          <p className="mt-6 text-sm sm:text-base text-ivory/80 font-body leading-relaxed max-w-xl">
            Exquisite bridal statements cast in precious solid gold and accented with brilliant starlight diamonds. Handcrafted meticulously for your forever.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* Wedding Jewellery Introduction Section */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 text-center py-16 lg:py-24 border-b border-ink/5">
        <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-2 block">Our Philosophy</span>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Designed for Forever.</h2>
        <p className="text-sm text-ink/70 leading-relaxed font-body">
          We believe that wedding jewellery should carry both weight and light. JEM’s designers and craftsmen select materials based on high-purity gold and clear solitaire diamonds. Each piece is hand-carved, maintaining structural integrity while achieving an extremely minimal silhouette for everyday elegance.
        </p>
      </section>

      {/* Three Main Collection Cards */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16">
        <div className="border-b border-ink/10 pb-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink">Core Bridal Suites</h2>
            <p className="text-xs text-ink/50 mt-1 font-body">The foundational pillars of JEM bridal craftsmanship</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-gold font-semibold">Heirloom Catalog</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {collectionHighlights.map((col) => (
            <TiltCard
              key={col.id}
              max={8}
              className="group relative bg-white border border-ink/5 hover:border-gold/20 rounded-3xl overflow-hidden shadow-soft-3d transition-colors duration-500 flex flex-col justify-between"
            >
              <div className="aspect-[4/5] overflow-hidden bg-ivory relative tilt-layer-deep shadow-sm">
                <img 
                  src={col.img} 
                  alt={col.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-ink text-ivory rounded-full">
                  {col.category}
                </span>
              </div>
              <div className="p-6 flex flex-col items-start flex-grow tilt-layer-inner">
                <h3 className="font-display text-xl text-ink group-hover:text-gold transition-colors duration-300">
                  {col.name}
                </h3>
                <p className="text-xs text-ink/60 font-body mt-2 leading-relaxed flex-grow">
                  {col.desc}
                </p>
                <Link 
                  to={`/product/${col.id}`}
                  className="mt-6 px-5 py-2.5 rounded-full border border-ink/15 group-hover:border-gold group-hover:bg-gold group-hover:text-ink text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 hover:scale-102 active:scale-95 self-stretch justify-center"
                >
                  Explore Collection <ArrowRight size={13} />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Featured Wedding Products Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-24">
        <div className="border-b border-ink/10 pb-6 mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-dark uppercase">FEATURED PIECES</span>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mt-1">Bridal Product Catalog</h2>
          <p className="text-xs text-ink/50 mt-1 font-body">Browse specifications, sizing options, and diamond grading details</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {weddingProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id)
            const isAdded = addedId === product.id

            return (
              <TiltCard
                key={product.id}
                max={6}
                className="group relative flex flex-col bg-white border border-ink/5 hover:border-gold/20 transition-colors duration-500 rounded-2xl overflow-hidden shadow-soft-3d"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/5] bg-ivory tilt-layer-deep shadow-sm">
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-ink text-ivory rounded-full">
                    {product.category}
                  </span>
                  
                  {product.tag && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-gold text-ink rounded-full">
                      {product.tag}
                    </span>
                  )}

                  <ProductImageCarousel 
                    images={product.images} 
                    alt={product.name} 
                    className="w-full h-full"
                  />

                  {/* Absolute overlay on Hover */}
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

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow tilt-layer-inner">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-1">
                    {product.material}
                  </span>
                  <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
                    <h3 className="font-display text-lg text-ink group-hover:text-gold transition-colors duration-300 min-h-[56px] leading-snug">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-ink/60 font-body mt-2 flex-grow line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-ink/5 mt-6 pt-4">
                    <span className="font-display text-xl text-ink font-semibold">
                      {formatPrice(product)}
                    </span>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="text-xs font-semibold tracking-wider uppercase text-ink hover:text-gold transition-colors flex items-center gap-1.5"
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
      <section className="relative bg-ink text-ivory py-16 mt-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-gold/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-8 text-center relative z-10">
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4 animate-float-soft">
              <Shield size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Lifetime Authenticity</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Every heirloom piece comes with an individually numbered certificate of gold purity and diamond grading authenticity.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4 animate-float-soft" style={{ animationDelay: '0.6s' }}>
              <Truck size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Secure Insured Delivery</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Fully insured armored transit directly to your door, packaged in a custom handcrafted oak keepsake display box.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4 animate-float-soft" style={{ animationDelay: '1.2s' }}>
              <RefreshCw size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Complimentary Resizing</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Free custom resizing and engraving on all bridal orders to ensure your heirloom fits you flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mt-24">
        <div className="relative bg-white rounded-3xl p-8 sm:p-16 border border-ink/5 shadow-soft-3d text-center flex flex-col items-center overflow-hidden">
          <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl animate-drift" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-2">Private Atelier Review</span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg mb-4">
            Bespoke Consultation
          </h2>
          <p className="text-xs sm:text-sm text-ink/60 font-body leading-relaxed max-w-md mb-8">
            Schedule a virtual video call or a private viewing at our New York flagship studio to custom design your wedding bands.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 rounded-full bg-ink hover:bg-gold hover:text-ink text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md active:scale-95 duration-100"
          >
            Schedule Consultation <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white max-w-4xl w-full rounded-xl overflow-hidden shadow-soft animate-in fade-in zoom-in duration-300 border border-gold/20 flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-gold text-ink transition-colors hover:scale-105"
            >
              <X size={18} />
            </button>

            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto min-h-[300px] relative bg-ivory">
              <ProductImageCarousel 
                images={selectedProduct.images} 
                alt={selectedProduct.name} 
                className="w-full h-full"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {selectedProduct.category} • {selectedProduct.material}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink mt-2 mb-4 leading-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed font-body mb-6">
                  {selectedProduct.description}
                </p>

                <div className="space-y-3 bg-ivory/50 p-4 rounded-lg border border-ink/5 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-ink/50">Carat Weight:</span>
                    <span className="text-ink font-medium">{selectedProduct.stones}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-ink/50">Average Weight:</span>
                    <span className="text-ink font-medium">{selectedProduct.weight}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-ink/50">Crafting Time:</span>
                    <span className="text-ink font-medium">4-5 Weeks (Custom Made)</span>
                  </div>
                </div>

                <h4 className="text-xs uppercase font-semibold tracking-wider text-ink/50 mb-2">Exquisite Perks:</h4>
                <ul className="space-y-1.5 mb-8">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="text-xs text-ink/80 flex items-center gap-2">
                      <Check size={14} className="text-emerald shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 border-t border-ink/10 pt-6 mt-auto">
                <div className="text-2xl font-display font-semibold text-ink">
                  {formatPrice(selectedProduct)}
                </div>
                <div className="flex-grow flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex-grow py-3 px-6 rounded-full bg-gold hover:bg-gold-light text-ink text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
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
                        ? 'border-ruby bg-ruby/10 text-ruby' 
                        : 'border-ink/10 hover:border-ruby hover:text-ruby text-ink/60'
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
