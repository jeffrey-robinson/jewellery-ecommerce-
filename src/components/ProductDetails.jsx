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
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center gap-1.5 text-xs text-ink/40">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
        <ChevronRight size={12} />
        <span className="text-ink/70 font-medium truncate">{product.name}</span>
      </nav>

      {/* Main Layout */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 perspective-1000 reveal-element">
        
        {/* Left: Product Images Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-ink/5 group premium-3d-card shadow-soft-3d">
            <ProductImageCarousel 
              images={product.images} 
              alt={product.name} 
              className="w-full h-full"
              activeImageIndex={activeImageIndex}
              onChangeIndex={(index) => setActiveImageIndex(index)}
            />
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-gold text-ink rounded-full">
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
                    activeImageIndex === index ? 'border-gold ring-2 ring-gold/20 scale-95' : 'border-ink/10 opacity-70 hover:opacity-100'
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
            <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-1 inline-block">
              {formatCategoryDisplay(product.category)} {product.code && `• Code: ${product.code}`}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mt-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-ink/40 font-body">4.9 / 5.0 (24 Customer Reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-3xl text-ink font-semibold">
                {formatPrice(product)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-ink/40 line-through">
                  {formatPrice({ ...product, price: product.oldPrice })}
                </span>
              )}
              <span className="text-xs uppercase tracking-wide px-2.5 py-0.5 border border-emerald-dark/20 text-emerald-dark rounded bg-emerald/5 ml-2 font-medium">
                In Stock & Ready to Ship
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-ink/75 leading-relaxed font-body mb-8">
              {product.description || 'A timeless representation of meticulous handcraft. Meticulously faceted to mirror natural light, this signature piece represents JEM\'s commitment to lightweight structures and luxury minimal style.'}
            </p>

            {/* Colors */}
            {product.colors && (
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-semibold tracking-wider text-ink/50 uppercase">Available Colours</span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="px-3 py-1 text-xs border border-ink/10 rounded-full font-body bg-white text-ink/80">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-wider text-ink/50 uppercase">Quantity</span>
              <div className="flex items-center border border-ink/10 rounded-full bg-white px-2 py-1">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-1.5 rounded-full hover:bg-ink/5 text-ink/70"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-1.5 rounded-full hover:bg-ink/5 text-ink/70"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row gap-3 border-t border-ink/10 pt-8 mb-8">
              <button 
                onClick={handleAddToCartClick}
                className="flex-grow py-4 px-8 rounded-full bg-ink hover:bg-emerald-dark text-white text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100 shadow-sm"
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>

              <button 
                onClick={() => {
                  addToCart(product, quantity)
                  navigate('/cart')
                }}
                className="flex-grow py-4 px-8 rounded-full bg-gold hover:bg-gold-light text-ink text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100 shadow-sm"
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
                      ? 'border-ruby bg-ruby/10 text-ruby' 
                      : 'border-ink/10 hover:border-ruby hover:text-ruby text-ink/60'
                  }`}
                  aria-label="Add to Wishlist"
                >
                  <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
                
                <button 
                  onClick={handleShare}
                  className={`p-4 rounded-full border border-ink/10 hover:border-gold hover:text-gold text-ink/60 transition-all relative`}
                  aria-label="Share Product"
                >
                  <Share2 size={16} />
                  {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-ivory text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
                      Link Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Details & Specs Accordion Tabs */}
          <div className="border-t border-ink/10 pt-6">
            <div className="flex border-b border-ink/10 mb-4 gap-6 text-sm font-semibold">
              <button 
                onClick={() => setActiveTab('details')}
                className={`pb-2 border-b-2 transition-all ${
                  activeTab === 'details' ? 'border-gold text-ink font-semibold' : 'border-transparent text-ink/40'
                }`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('shipping')}
                className={`pb-2 border-b-2 transition-all ${
                  activeTab === 'shipping' ? 'border-gold text-ink font-semibold' : 'border-transparent text-ink/40'
                }`}
              >
                Delivery & Packaging
              </button>
            </div>

            {activeTab === 'details' ? (
              <div className="space-y-2.5 text-xs text-ink/80 font-body">
                {product.code && (
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-ink/40">Product Code</span>
                    <span className="font-semibold text-ink">{product.code}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-ink/5">
                  <span className="text-ink/40">Material Composition</span>
                  <span>{material}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ink/5">
                  <span className="text-ink/40">Gemstone Details</span>
                  <span>{stones}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ink/5">
                  <span className="text-ink/40">Average Weight</span>
                  <span>{weight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ink/5">
                  <span className="text-ink/40">Default Sizing</span>
                  <span>{size}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-ink/85 leading-relaxed font-body">
                <p className="flex items-start gap-2">
                  <Truck size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>Complimentary insured shipping on all orders. Dispatch occurs within 24-48 hours (standard orders) or 4-5 weeks (bespoke/wedding collection).</span>
                </p>
                <p className="flex items-start gap-2">
                  <Shield size={14} className="text-gold shrink-0 mt-0.5" />
                  <span>Shipped in our signature JEM leather-lined display box along with a certificate of precious metal authenticity.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 py-16 border-t border-ink/10 mt-20">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
            <Shield size={16} />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Lifetime Guarantee</h4>
            <p className="text-xs text-ink/50 mt-0.5">Complementary cleaning & repair coverage</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
            <Truck size={16} />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Fully Insured Transit</h4>
            <p className="text-xs text-ink/50 mt-0.5">Secure, signature-verified delivery</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
            <RefreshCw size={16} />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Easy Returns</h4>
            <p className="text-xs text-ink/50 mt-0.5">30-day hassle-free exchange policy</p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 border-t border-ink/10 pt-16 mt-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gold uppercase">Recommendation</span>
              <h2 className="font-display text-2xl text-ink mt-2">Complete the Look</h2>
            </div>
            <Link to="/collections" className="text-xs uppercase tracking-wider font-semibold text-gold hover:text-gold-dark transition-colors">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group relative rounded-3xl overflow-hidden bg-white border border-ink/5 hover:border-gold/20 transition-all duration-300 flex flex-col justify-between premium-3d-card shadow-soft-3d"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ivory premium-3d-deep shadow-sm">
                  <ProductImageCarousel images={p.images} alt={p.name} />
                </div>
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between border-t border-ink/5 premium-3d-inner">
                  <div>
                    <p className="text-[10px] uppercase tracking-wide text-ink/40">{p.category}</p>
                    <h3 className="font-display text-base text-ink mt-1 group-hover:text-gold transition-colors duration-300 min-h-[44px] leading-snug">{p.name}</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-base text-ink font-semibold">{formatPrice(p)}</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gold flex items-center gap-0.5">
                      View details <ChevronRight size={10} />
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
