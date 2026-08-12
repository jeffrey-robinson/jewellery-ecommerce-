import { useState, useEffect } from 'react'
import { Sparkles, ArrowRight, Eye, ShoppingBag, X, Check, Heart, Shield, RefreshCw, Truck } from 'lucide-react'

const weddingProducts = [
  {
    id: 'w1',
    name: 'Aura Leaf Bridal Choker',
    category: 'Necklace',
    price: 1850,
    rating: 5,
    tag: 'Signature Piece',
    material: '22kt Solid Yellow Gold',
    stones: '1.2ct Hand-cut Round Brilliant Diamonds',
    weight: '34.5 grams',
    description: 'A breathtaking handcrafted choker featuring cascading leaf motifs that drape elegantly against the collarbone. Hand-cut micro-facets catch and reflect ambient light, creating an ethereal glow perfect for your special day.',
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
    features: ['Individually numbered certificate', 'Custom fit sizing included', 'Lifetime warranty']
  },
  {
    id: 'w2',
    name: 'Royal Heritage Filigree Kada',
    category: 'Kada',
    price: 1250,
    rating: 5,
    tag: 'Heritage Design',
    material: '18kt Antique Brushed Gold',
    stones: 'Uncut Polki Diamonds & Ruby Accents',
    weight: '28.2 grams',
    description: 'An open-work filigree bangle inspired by royal Indian craftsmanship. Finished with a delicate brushed-satin texture, this heritage Kada blends timeless traditions with a modern, lightweight structured silhouette.',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80',
    features: ['Sizing safety lock mechanism', 'Custom engravings available', 'Heritage collection case']
  },
  {
    id: 'w3',
    name: 'Starlight Interlocking Link Bracelet',
    category: 'Chain Bracelet',
    price: 890,
    rating: 5,
    tag: 'Modern Classic',
    material: '18kt Solid Yellow Gold',
    stones: '0.75ct Micro-pave Solitaire Diamonds',
    weight: '14.8 grams',
    description: 'Bold interlocking gold chains adorned with round-cut starlight diamonds. Sleek, minimal, and structural, it represents an unbroken bond. Designed to stand alone or layer elegantly with other heirloom cuffs.',
    img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
    features: ['Reinforced security clasp', 'Adjustable link length', 'Premium velvet pouch']
  }
]

export default function WeddingCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [addedToCartId, setAddedToCartId] = useState(null)

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

  const handleAddToCart = (id) => {
    setCartCount(prev => prev + 1)
    setAddedToCartId(id)
    setTimeout(() => {
      setAddedToCartId(null)
    }, 2000)
  }

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Premium Hero Banner */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-ink">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-overlay"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-transparent z-10" />
        
        {/* Floating gold particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/30 rounded-full blur-[1px] animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gold/20 rounded-full blur-[2px] animate-ping duration-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-gold/40 rounded-full blur-[1px] animate-pulse" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
            <Sparkles size={14} className="animate-spin duration-1000" /> The Vow Collection <Sparkles size={14} className="animate-spin duration-1000" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-tight">
            Wedding Heirlooms
          </h1>
          <p className="mt-6 text-sm sm:text-base text-ivory/80 font-body leading-relaxed max-w-xl">
            A premium collection handcrafted for the modern bride. Necklaces, traditional Kadas, and interlocking bracelets meticulously cast in solid gold and accented with premium brilliant diamonds.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* Main Collection Grid Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ink/10 pb-6 mb-12">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink">Hand-Selected Bridal Suite</h2>
            <p className="text-xs sm:text-sm text-ink/60 font-body mt-1">Exquisitely cast in high-purity precious metals</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-gold font-semibold mt-4 md:mt-0 flex items-center gap-1">
            3 Exquisite Masterpieces <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block ml-1"></span>
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {weddingProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id)
            const isAdded = addedToCartId === product.id

            return (
              <div 
                key={product.id} 
                className="group relative flex flex-col bg-white border border-ink/5 hover:border-gold/30 hover:shadow-soft transition-all duration-500 rounded-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/5] bg-ivory">
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-ink text-ivory rounded-full">
                    {product.category}
                  </span>
                  
                  {/* Tag badge (Bestseller/Signature) */}
                  {product.tag && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-gold text-ink rounded-full">
                      {product.tag}
                    </span>
                  )}

                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Absolute overlay on Hover */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      aria-label="Quick View" 
                      className="p-3 bg-white hover:bg-gold hover:text-ink text-ink rounded-full transition-colors shadow-lg duration-300"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      aria-label="Add to Cart" 
                      className="p-3 bg-white hover:bg-gold hover:text-ink text-ink rounded-full transition-colors shadow-lg duration-300"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-1">
                    {product.material}
                  </span>
                  <h3 className="font-display text-lg text-ink group-hover:text-gold transition-colors duration-300 min-h-[56px] leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-ink/60 font-body mt-2 flex-grow line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-ink/5 mt-6 pt-4">
                    <span className="font-display text-xl text-ink font-semibold">
                      ${product.price.toLocaleString()}
                    </span>
                    
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-semibold tracking-wider uppercase text-ink hover:text-gold transition-colors flex items-center gap-1"
                    >
                      View Heirloom <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Trust Badges - Brand Promise */}
      <section className="bg-ink text-ivory py-16 mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4">
              <Shield size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Lifetime Authenticity</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Every heirloom piece comes with an individually numbered certificate of gold purity and diamond grading authenticity.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4">
              <Truck size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Secure Insured Delivery</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Fully insured armored transit directly to your door, packaged in a custom handcrafted oak keepsake display box.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="h-12 w-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4">
              <RefreshCw size={20} />
            </div>
            <h4 className="font-display text-lg mb-2">Complimentary Tailoring</h4>
            <p className="text-xs text-ivory/60 max-w-xs leading-relaxed">
              Free custom resizing and engraving on all bridal orders to ensure your heirloom fits you flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white max-w-4xl w-full rounded-xl overflow-hidden shadow-soft animate-in fade-in zoom-in duration-300 border border-gold/20 flex flex-col md:flex-row">
            {/* Modal close button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-gold text-ink transition-colors hover:scale-105"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto min-h-[300px] relative bg-ivory">
              <img 
                src={selectedProduct.img} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Details */}
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

                {/* Details list */}
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

              {/* Action Buttons */}
              <div className="flex items-center gap-4 border-t border-ink/10 pt-6 mt-auto">
                <div className="text-2xl font-display font-semibold text-ink">
                  ${selectedProduct.price.toLocaleString()}
                </div>
                <div className="flex-grow flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(selectedProduct.id)}
                    className="flex-grow py-3 px-6 rounded-full bg-gold hover:bg-gold-light text-ink text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                  >
                    {addedToCartId === selectedProduct.id ? (
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
