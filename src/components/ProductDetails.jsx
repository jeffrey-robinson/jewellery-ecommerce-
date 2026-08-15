import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Shield, Truck, RefreshCw, ShoppingBag, Heart, Share2, Plus, Minus, Check, ChevronRight } from 'lucide-react'
import { catalogProducts } from '../data/content.js'

const formatCategoryDisplay = (cat) => {
  if (!cat) return ''
  const lower = cat.toLowerCase()
  if (lower === 'chain-bracelet') return 'Chain Bracelet'
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
}
import { formatPrice } from '../utils/currency.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductImageCarousel from './ProductImageCarousel.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const [product, setProduct] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('details')
  const [copied, setCopied] = useState(false)

  // Load product details
  useEffect(() => {
    const found = catalogProducts.find((p) => String(p.id) === String(id))
    if (found) {
      setProduct(found)
      setActiveImageIndex(0)
      setQuantity(1)
    } else {
      // If product not found, redirect to collections
      navigate('/collections')
    }
  }, [id, navigate])

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="bg-ivory min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-gold border-t-transparent rounded-full" />
      </div>
    )
  }

  // Get valid thumbnails from the images array (up to 2 elements)
  const thumbnails = product.images ? product.images.filter(img => img && img.trim() !== '') : []

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(console.error)
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleAddToCartClick = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // Filter out the current product from related products
  const related = catalogProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  // Specs helper depending on whether it's wedding or standard product
  const material = product.material || '18kt Solid Yellow Gold'
  const stones = product.stones || '0.25ct Round Brilliant Diamond (VVS1, E)'
  const weight = product.weight || '4.2 grams'
  const size = product.category === 'Rings' ? 'US 6 (Resizable)' : 'Standard (7 inches)'

  return (
    <div className="bg-[#FCF8F2] min-h-screen text-[#211522] pb-24">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex items-center gap-1.5 text-xs text-[#211522]/50">
        <Link to="/" className="hover:text-[#6A3578] transition-colors">Home</Link>
        <ChevronRight size={12} className="text-[#D4AF65]" />
        <Link to="/collections" className="hover:text-[#6A3578] transition-colors">Collections</Link>
        <ChevronRight size={12} className="text-[#D4AF65]" />
        <span className="text-[#211522]/80 font-semibold truncate">{product.name}</span>
      </nav>

      {/* Main Layout */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 perspective-1000 reveal-element">
        
        {/* Left: Product Images Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-[#E8D8EE] group premium-3d-card shadow-soft">
            <ProductImageCarousel 
              images={product.images} 
              alt={product.name} 
              className="w-full h-full"
              activeImageIndex={activeImageIndex}
              onChangeIndex={(index) => setActiveImageIndex(index)}
            />
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[9px] font-bold tracking-wider uppercase bg-[#D4AF65] text-[#3B183F] rounded-full shadow-sm">
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {thumbnails.length > 1 && (
            <div className="flex items-center gap-3">
              {thumbnails.map((thumb, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 aspect-square rounded-xl overflow-hidden bg-white border transition-all ${
                    activeImageIndex === index 
                      ? 'border-[#6A3578] ring-2 ring-[#6A3578]/25 scale-95 shadow-sm' 
                      : 'border-[#E8D8EE] opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="flex flex-col justify-between py-2 premium-3d-inner">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6A3578] mb-1 inline-block">
              {formatCategoryDisplay(product.category)} {product.code && `• Code: ${product.code}`}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl text-[#211522] leading-tight font-medium">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mt-3.5 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#D4AF65] text-[#D4AF65]" />
                ))}
              </div>
              <span className="text-xs text-[#211522]/50 font-body">4.9 / 5.0 (24 Verified Client Reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-3xl text-[#6A3578] font-bold">
                {formatPrice(product)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-[#211522]/40 line-through">
                  {formatPrice({ ...product, price: product.oldPrice })}
                </span>
              )}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 border border-[#D4AF65]/35 text-[#B38B3E] rounded-md bg-[#FCF8F2] ml-4">
                ATELIER READY
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#211522]/75 leading-relaxed font-body mb-8">
              {product.description || 'A timeless representation of meticulous handcraft. Meticulously faceted to mirror natural light, this signature piece represents JEM\'s commitment to lightweight structures and luxury minimal style.'}
            </p>

            {/* Colors */}
            {product.colors && (
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-semibold tracking-wider text-[#211522]/50 uppercase">Available Colours</span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-3.5 py-1.5 text-xs border border-[#E8D8EE] rounded-full font-body bg-white text-[#211522]/80 font-medium">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-wider text-[#211522]/50 uppercase">Quantity</span>
              <div className="flex items-center border border-[#E8D8EE] rounded-full bg-white px-2 py-1 shadow-sm">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-1.5 rounded-full hover:bg-[#E8D8EE]/30 text-[#211522]/70 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-[#211522]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-1.5 rounded-full hover:bg-[#E8D8EE]/30 text-[#211522]/70 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row gap-3 border-t border-[#E8D8EE] pt-8 mb-8">
              <button 
                onClick={handleAddToCartClick}
                className="flex-grow py-4 px-8 rounded-full bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 active:scale-95 duration-100 shadow-md"
              >
                {added ? (
                  <>
                    <Check size={15} /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={15} /> Add to Cart
                  </>
                )}
              </button>

              <button 
                onClick={() => {
                  addToCart(product, quantity)
                  navigate('/cart')
                }}
                className="flex-grow py-4 px-8 rounded-full bg-[#3B183F] text-white border border-[#D4AF65]/35 hover:border-[#D4AF65] text-xs font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2 active:scale-95 duration-100 shadow-md hover:bg-[#6A3578]"
              >
                Buy Now
              </button>

              <div className="flex gap-2 justify-center sm:justify-start">
                <button 
                  onClick={() => {
                    if (isInWishlist(product.id)) {
                      removeFromWishlist(product.id)
                    } else {
                      addToWishlist(product)
                    }
                  }}
                  className={`p-4 rounded-full border transition-all ${
                    isInWishlist(product.id)
                      ? 'border-[#6A3578] bg-[#E8D8EE] text-[#6A3578] shadow-sm' 
                      : 'border-[#E8D8EE] hover:border-[#6A3578] hover:text-[#6A3578] text-[#211522]/60 bg-white'
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
                
                <button 
                  onClick={handleShare}
                  className="p-4 rounded-full border border-[#E8D8EE] hover:border-[#6A3578] hover:text-[#6A3578] text-[#211522]/60 bg-white transition-all relative"
                  aria-label="Share Product"
                >
                  <Share2 size={16} />
                  {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#3B183F] text-white text-[10px] px-2.5 py-1 rounded shadow-md whitespace-nowrap z-30 border border-[#D4AF65]/30">
                      Link Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Details & Specs Accordion Tabs */}
          <div className="border-t border-[#E8D8EE] pt-6">
            <div className="flex border-b border-[#E8D8EE] mb-4 gap-6 text-sm font-semibold">
              <button 
                onClick={() => setActiveTab('details')}
                className={`pb-2 border-b-2 transition-all ${
                  activeTab === 'details' ? 'border-[#D4AF65] text-[#211522] font-semibold' : 'border-transparent text-[#211522]/40'
                }`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('shipping')}
                className={`pb-2 border-b-2 transition-all ${
                  activeTab === 'shipping' ? 'border-[#D4AF65] text-[#211522] font-semibold' : 'border-transparent text-[#211522]/40'
                }`}
              >
                Delivery & Packaging
              </button>
            </div>

            {activeTab === 'details' ? (
              <div className="space-y-2.5 text-xs text-[#211522]/80 font-body">
                {product.code && (
                  <div className="flex justify-between py-1.5 border-b border-[#E8D8EE]/60">
                    <span className="text-[#211522]/50">Product Code</span>
                    <span className="font-semibold text-[#211522]">{product.code}</span>
                  </div>
                )}
                <div className="flex justify-between py-1.5 border-b border-[#E8D8EE]/60">
                  <span className="text-[#211522]/50">Material Composition</span>
                  <span className="font-medium text-[#211522]">{material}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8D8EE]/60">
                  <span className="text-[#211522]/50">Gemstone Details</span>
                  <span className="font-medium text-[#211522]">{stones}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8D8EE]/60">
                  <span className="text-[#211522]/50">Average Weight</span>
                  <span className="font-medium text-[#211522]">{weight}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8D8EE]/60">
                  <span className="text-[#211522]/50">Default Sizing</span>
                  <span className="font-medium text-[#211522]">{size}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-[#211522]/85 leading-relaxed font-body">
                <p className="flex items-start gap-2.5">
                  <Truck size={14} className="text-[#D4AF65] shrink-0 mt-0.5" />
                  <span>Complimentary insured shipping on all orders. Dispatch occurs within 24-48 hours (standard orders) or 4-5 weeks (bespoke/wedding collection).</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Shield size={14} className="text-[#D4AF65] shrink-0 mt-0.5" />
                  <span>Shipped in our signature JEM leather-lined display box along with a certificate of precious metal authenticity.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 py-16 border-t border-[#E8D8EE] mt-20">
        <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-[#E8D8EE] shadow-sm">
          <div className="h-10 w-10 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] bg-[#FCF8F2] shrink-0">
            <Shield size={16} className="text-[#D4AF65]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#211522]">Lifetime Guarantee</h4>
            <p className="text-xs text-[#211522]/50 mt-0.5 font-body">Complementary cleaning & repair coverage</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-[#E8D8EE] shadow-sm">
          <div className="h-10 w-10 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] bg-[#FCF8F2] shrink-0">
            <Truck size={16} className="text-[#D4AF65]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#211522]">Fully Insured Transit</h4>
            <p className="text-xs text-[#211522]/50 mt-0.5 font-body">Secure, signature-verified delivery</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-[#E8D8EE] shadow-sm">
          <div className="h-10 w-10 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] bg-[#FCF8F2] shrink-0">
            <RefreshCw size={16} className="text-[#D4AF65]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#211522]">Easy Returns</h4>
            <p className="text-xs text-[#211522]/50 mt-0.5 font-body">30-day hassle-free exchange policy</p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 border-t border-[#E8D8EE] pt-16 mt-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#6A3578] uppercase">Recommendation</span>
              <h2 className="font-display text-2xl text-[#211522] mt-2">Complete the Look</h2>
            </div>
            <Link to="/collections" className="text-xs uppercase tracking-wider font-semibold text-[#6A3578] hover:text-[#3B183F] transition-colors">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group relative rounded-[2rem] overflow-hidden bg-white border border-[#E8D8EE] hover:border-[#D4AF65]/40 transition-all duration-500 flex flex-col justify-between premium-3d-card shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#FCF8F2] premium-3d-deep shadow-sm">
                  <ProductImageCarousel images={p.images} alt={p.name} />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between bg-white premium-3d-inner">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6A3578]/70">{p.category}</p>
                    <h3 className="font-display text-base text-[#211522] mt-1.5 group-hover:text-[#6A3578] transition-colors duration-300 min-h-[44px] leading-snug font-medium line-clamp-2">{p.name}</h3>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#E8D8EE]/60 mt-4 pt-3">
                    <span className="font-display text-base text-[#6A3578] font-bold">{formatPrice(p)}</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#6A3578] flex items-center gap-0.5 group-hover:text-[#3B183F]">
                      View details <ChevronRight size={10} className="text-[#D4AF65]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
