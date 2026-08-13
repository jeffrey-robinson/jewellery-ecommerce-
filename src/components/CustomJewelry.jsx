import { useState, useEffect } from 'react'
import { Sparkles, ShoppingBag, Check, RefreshCw, Type, Eye } from 'lucide-react'
import { products } from '../data/content.js'
import { useCart } from '../context/CartContext.jsx'
import TiltCard from './TiltCard.jsx'

const categoriesList = [
  { id: 'Necklace', name: 'Necklaces' },
  { id: 'Kada', name: 'Kadas' },
  { id: 'Chain Bracelet', name: 'Chain Bracelets' },
]

const materials = [
  { id: 'gold', name: '18kt Yellow Gold Plating', colorCode: '#C9A227', glowClass: 'shadow-gold/20', priceAdd: 1200 },
  { id: 'rose-gold', name: '18kt Rose Gold Plating', colorCode: '#C85462', glowClass: 'shadow-ruby/20', priceAdd: 1500 },
  { id: 'silver', name: '925 Sterling Silver Finish', colorCode: '#D1D5DB', glowClass: 'shadow-slate-300/20', priceAdd: 0 },
  { id: 'platinum', name: 'Platinum Plating', colorCode: '#E5E7EB', glowClass: 'shadow-slate-100/20', priceAdd: 2500 },
]

const gemstones = [
  { id: 'none', name: 'No Extra Stone', colorCode: 'transparent', priceAdd: 0, glowClass: 'bg-transparent' },
  { id: 'diamond', name: 'Mini Solitaire Diamond', colorCode: '#E0F2FE', priceAdd: 3500, glowClass: 'bg-sky-100/40' },
  { id: 'emerald', name: 'Emerald Green Accent', colorCode: '#0B6E4F', priceAdd: 1800, glowClass: 'bg-emerald/30' },
  { id: 'ruby', name: 'Crimson Ruby Highlight', colorCode: '#B23A48', priceAdd: 2200, glowClass: 'bg-ruby/30' },
  { id: 'sapphire', name: 'Midnight Sapphire Speck', colorCode: '#2C4A7C', priceAdd: 2000, glowClass: 'bg-sapphire/30' },
]

const sizes = [
  { id: 'S', name: 'Small', details: 'Comfort Fit (S)', priceAdd: 0 },
  { id: 'M', name: 'Medium', details: 'Standard Fit (M)', priceAdd: 150 },
  { id: 'L', name: 'Large', details: 'Relaxed Fit (L)', priceAdd: 300 },
]

export default function CustomJewelry() {
  const [activeCategory, setActiveCategory] = useState('Necklace')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0])
  const [selectedGemstone, setSelectedGemstone] = useState(gemstones[0])
  const [selectedSize, setSelectedSize] = useState(sizes[1])
  const [engravingText, setEngravingText] = useState('')
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  // Filter products by category, ensuring we get only the newly added items
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'Chain Bracelet') {
      return p.category === 'Chain Bracelet' && String(p.id).startsWith('B00')
    }
    if (activeCategory === 'Kada') {
      return p.category === 'Kada' && String(p.id).startsWith('K00')
    }
    return p.category === 'Necklace' && String(p.id).startsWith('0') // new necklaces starts with '0'
  })

  // Set default product when category changes
  useEffect(() => {
    if (filteredProducts.length > 0) {
      setSelectedProduct(filteredProducts[0])
    }
  }, [activeCategory])

  const handleReset = () => {
    setActiveCategory('Necklace')
    if (filteredProducts.length > 0) {
      setSelectedProduct(filteredProducts[0])
    }
    setSelectedMaterial(materials[0])
    setSelectedGemstone(gemstones[0])
    setSelectedSize(sizes[1])
    setEngravingText('')
  }

  // Calculate prices
  const baseCost = selectedProduct ? selectedProduct.price : 0
  const materialCost = selectedMaterial.priceAdd
  const gemstoneCost = selectedGemstone.priceAdd
  const sizeCost = selectedSize.priceAdd
  const engravingCost = engravingText ? 150 : 0
  const totalCost = baseCost + materialCost + gemstoneCost + sizeCost + engravingCost

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleAddToCart = () => {
    if (!selectedProduct) return

    const customDetails = `Base: ${selectedProduct.name} (Code: ${selectedProduct.code || 'N/A'}), Material: ${selectedMaterial.name}, Gemstone: ${selectedGemstone.name}, Size: ${selectedSize.name}${engravingText ? `, Engraving: "${engravingText}"` : ''}`
    
    const customizedProduct = {
      id: `custom-${selectedProduct.id}-${Date.now()}`,
      name: `Bespoke JEM ${selectedProduct.name}`,
      category: selectedProduct.category,
      price: totalCost,
      currency: '₹',
      img: selectedProduct.img,
      description: customDetails,
    }

    addToCart(customizedProduct, 1)
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Header section */}
      <section className="bg-ink text-ivory py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3 inline-block">
            Bespoke Atelier
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Custom Jewelry Design
          </h1>
          <p className="mt-4 text-sm text-ivory/65 max-w-lg mx-auto font-body leading-relaxed">
            Customize JEM's premium anti-tarnish jewelry. Select an alloy finish, add precious gemstone accents, pick your fit size, and laser-engrave custom text.
          </p>
        </div>
      </section>

      {/* Main Configurator Area */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Live Visual Preview & Summary (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Real-time Rendering
            </h2>

            {selectedProduct && (
              <TiltCard 
                max={5} 
                className="relative aspect-[4/5] w-full bg-white rounded-3xl overflow-hidden shadow-soft-3d border border-ink/5 flex items-center justify-center p-5 transition-all duration-700"
              >
                {/* Dynamic Material Background Glow */}
                <div 
                  className="absolute inset-0 opacity-10 blur-3xl transition-colors duration-700 pointer-events-none rounded-full scale-75"
                  style={{ backgroundColor: selectedMaterial.colorCode }}
                />

                {/* Gemstone Aura Overlay */}
                <div className={`absolute inset-0 mix-blend-color-dodge transition-all duration-700 pointer-events-none ${selectedGemstone.glowClass}`} />

                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-ivory shadow-inner">
                  <img 
                    src={selectedProduct.img} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover transition-all duration-700" 
                  />

                  {/* Live Engraving Overlay */}
                  {engravingText && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-ink/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-gold/20 max-w-[85%] shadow-lg animate-fade-in flex items-center gap-1.5">
                      <span className="font-display italic text-xs text-gold tracking-widest uppercase truncate">
                        "{engravingText}"
                      </span>
                    </div>
                  )}

                  {/* Info badge */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="px-3 py-1 text-[9px] font-semibold uppercase tracking-wider bg-ink text-ivory rounded-full self-start">
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.code && (
                      <span className="px-3 py-1 text-[9px] font-semibold uppercase tracking-wider bg-gold text-ink rounded-full self-start">
                        Code: {selectedProduct.code}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            )}

            {/* Spec Highlights */}
            {selectedProduct && (
              <div className="mt-6 bg-white/60 border border-ink/5 p-4 rounded-2xl flex flex-wrap gap-4 justify-around text-center shadow-sm">
                <div>
                  <span className="block text-[10px] text-ink/40 uppercase font-semibold">Gemstone</span>
                  <span className="text-xs font-semibold text-ink/80">{selectedGemstone.name}</span>
                </div>
                <div className="w-px bg-ink/10 self-stretch" />
                <div>
                  <span className="block text-[10px] text-ink/40 uppercase font-semibold">Fit Size</span>
                  <span className="text-xs font-semibold text-ink/80">{selectedSize.name} ({selectedSize.details})</span>
                </div>
                <div className="w-px bg-ink/10 self-stretch" />
                <div>
                  <span className="block text-[10px] text-ink/40 uppercase font-semibold">Base Price</span>
                  <span className="text-xs font-semibold text-ink/80">₹{selectedProduct.price}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1: Category Tab */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-xl text-ink flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">1</span>
                  Choose Category
                </h3>
                <button 
                  onClick={handleReset}
                  className="text-xs font-semibold uppercase tracking-wider text-ink/40 hover:text-gold flex items-center gap-1 transition-colors"
                >
                  <RefreshCw size={11} /> Reset Design
                </button>
              </div>
              <div className="flex border-b border-ink/10 gap-6">
                {categoriesList.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`pb-3 text-sm font-semibold tracking-wider uppercase relative transition-colors ${
                      activeCategory === cat.id ? 'text-gold' : 'text-ink/50 hover:text-ink/80'
                    }`}
                  >
                    {cat.name}
                    {activeCategory === cat.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Base Design Product */}
            <div>
              <h3 className="font-display text-lg text-ink flex items-center gap-2 mb-4">
                <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">2</span>
                Select Base Design
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3 rounded-xl border text-left flex gap-3 items-center transition-all duration-300 ${
                      selectedProduct?.id === prod.id
                        ? 'border-gold bg-gold/5 shadow-sm'
                        : 'border-ink/5 hover:border-ink/20 bg-white'
                    }`}
                  >
                    <img src={prod.img} alt={prod.name} className="w-12 h-15 object-cover rounded-md bg-ivory shrink-0 shadow-sm" />
                    <div className="min-w-0 flex-grow">
                      <span className="block text-xs font-semibold truncate text-ink">{prod.name}</span>
                      <span className="block text-[10px] text-ink/40 font-body mt-0.5">Code: {prod.code || 'N/A'}</span>
                      <span className="block text-xs font-display text-gold font-semibold mt-1">₹{prod.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Alloy / Metals */}
            <div>
              <h3 className="font-display text-lg text-ink flex items-center gap-2 mb-4">
                <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">3</span>
                Select Alloy Finish
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center ${
                      selectedMaterial.id === mat.id
                        ? 'border-gold bg-gold/5 shadow-sm text-ink'
                        : 'border-ink/10 hover:border-ink/20 text-ink/65 bg-white'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full border border-ink/10 mb-2 shadow-inner" 
                      style={{ backgroundColor: mat.colorCode }}
                    />
                    <span className="text-[10px] font-semibold uppercase tracking-wider font-body leading-tight">{mat.name}</span>
                    <span className="text-[9px] text-ink/40 mt-1 font-body">
                      {mat.priceAdd > 0 ? `+₹${mat.priceAdd}` : 'Included'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Gemstones */}
            <div>
              <h3 className="font-display text-lg text-ink flex items-center gap-2 mb-4">
                <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">4</span>
                Select Gemstone Accents
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {gemstones.map((gem) => (
                  <button
                    key={gem.id}
                    onClick={() => setSelectedGemstone(gem)}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center ${
                      selectedGemstone.id === gem.id
                        ? 'border-gold bg-gold/5 shadow-sm text-ink'
                        : 'border-ink/10 hover:border-ink/20 text-ink/65 bg-white'
                    }`}
                  >
                    {gem.id !== 'none' ? (
                      <span 
                        className="w-3.5 h-3.5 rotate-45 border border-ink/5 mb-2 shadow-sm shrink-0 font-body" 
                        style={{ backgroundColor: gem.colorCode }}
                      />
                    ) : (
                      <span className="w-3.5 h-3.5 border border-dashed border-ink/30 rounded-full mb-2 shrink-0" />
                    )}
                    <span className="text-[9px] font-semibold uppercase tracking-wider leading-tight min-h-[24px] flex items-center justify-center font-body">
                      {gem.name}
                    </span>
                    <span className="text-[8px] text-ink/45 mt-1 font-body">
                      {gem.priceAdd > 0 ? `+₹${gem.priceAdd}` : 'No Cost'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Sizing */}
            <div>
              <h3 className="font-display text-lg text-ink flex items-center gap-2 mb-4">
                <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">5</span>
                Select Sizing Options
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedSize.id === sz.id
                        ? 'border-gold bg-gold/5 shadow-sm text-ink'
                        : 'border-ink/10 hover:border-ink/20 text-ink/65 bg-white'
                    }`}
                  >
                    <span className="block text-xs font-semibold uppercase tracking-wider font-body">{sz.name}</span>
                    <span className="block text-[10px] text-ink/50 font-body mt-0.5">{sz.details}</span>
                    <span className="block text-[9px] text-gold font-bold mt-2 font-body">
                      {sz.priceAdd > 0 ? `+₹${sz.priceAdd}` : 'Standard Fit'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Custom Engraving */}
            <div>
              <h3 className="font-display text-lg text-ink flex items-center gap-2 mb-2">
                <span className="h-6 w-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold font-body">6</span>
                Laser Engraving Text
              </h3>
              <p className="text-xs text-ink/50 font-body mb-4">
                Personalize your bespoke selection with laser-carved letters or digits (+₹150)
              </p>
              <div className="relative max-w-md">
                <input 
                  type="text"
                  maxLength={20}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                  placeholder="E.G. JEM ATELIER"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-ink/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none bg-white text-sm font-semibold uppercase tracking-wider placeholder:text-ink/30"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-ink/40">
                  {engravingText.length}/20
                </span>
              </div>
            </div>

            {/* Order Summary & Add to Bag */}
            {selectedProduct && (
              <div className="border border-gold/25 rounded-2xl overflow-hidden bg-white shadow-soft">
                <div className="bg-ink text-ivory px-6 py-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gold font-semibold font-body">Pricing Breakdown</h4>
                    <span className="text-xs text-ivory/50 font-body">Bespoke summary details</span>
                  </div>
                  <Sparkles size={16} className="text-gold animate-pulse" />
                </div>

                <div className="p-6 space-y-4">
                  {/* Breakdown items */}
                  <div className="space-y-2 text-xs font-body">
                    <div className="flex justify-between text-ink/75">
                      <span>Base Design: {selectedProduct.name} {selectedProduct.code && `(${selectedProduct.code})`}</span>
                      <span>₹{baseCost}</span>
                    </div>
                    <div className="flex justify-between text-ink/65">
                      <span>Alloy Finish: {selectedMaterial.name}</span>
                      <span>+₹{materialCost}</span>
                    </div>
                    {gemstoneCost > 0 && (
                      <div className="flex justify-between text-ink/65">
                        <span>Gemstone Accent: {selectedGemstone.name}</span>
                        <span>+₹{gemstoneCost}</span>
                      </div>
                    )}
                    {sizeCost > 0 && (
                      <div className="flex justify-between text-ink/65">
                        <span>Fit Choice: {selectedSize.name}</span>
                        <span>+₹{sizeCost}</span>
                      </div>
                    )}
                    {engravingCost > 0 && (
                      <div className="flex justify-between text-ink/65">
                        <span>Laser Engraving ("{engravingText}")</span>
                        <span>+₹{engravingCost}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-ink/5 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-ink/45 uppercase font-semibold">Estimated Price</span>
                      <span className="font-display text-2xl text-ink font-semibold">₹{totalCost}</span>
                      <span className="block text-[9px] text-ink/40 font-body italic mt-0.5">*(Includes GST & standard shipping)</span>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`px-8 py-3 rounded-full flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isAdded 
                          ? 'bg-emerald text-white' 
                          : 'bg-gold hover:bg-gold-light text-ink shadow-sm'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} /> Added to Bag
                        </>
                      ) : (
                        <>
                          Buy Bespoke <ShoppingBag size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}
