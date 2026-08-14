import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'
import TiltCard from './TiltCard.jsx'

export default function HomeShowcase() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    const elements = document.querySelectorAll('.reveal-element')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="bg-ivory min-h-screen w-full overflow-hidden flex items-center justify-center py-20 px-5 sm:px-8 relative">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 left-10 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl animate-drift-slow z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-drift z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.05)_1px,transparent_1px)] [background-size:32px_32px] opacity-25 z-0" />

      {/* Floating 3D Stickers */}
      <div className="absolute left-[5%] top-[12%] luxury-sticker luxury-sticker-orange animate-sticker-1 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2 z-20">
        ✨ 100% Anti-Tarnish
      </div>
      <div className="absolute right-[6%] top-[15%] luxury-sticker animate-sticker-2 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2 z-20">
        💧 Water Resistant
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column: Title & Styled Guarantee Feature Card */}
        <div className="reveal-element flex flex-col items-start text-left space-y-8">
          <span className="glass-panel flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold px-4 py-2 rounded-full border border-gold/20 shadow-glow animate-glow-pulse">
            <Sparkles size={12} className="animate-spin duration-[4000ms]" /> Elite Curation
          </span>
          
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight">
            Sophisticated <br />
            <span className="italic text-gold">Everyday Luxury</span>
          </h2>
          
          <div className="h-[1px] w-24 bg-gradient-to-r from-gold to-transparent" />

          {/* Fancy Golden Orange Feature Card (Black text) */}
          <div className="w-full max-w-md bg-gradient-to-br from-[#FFF8F3] via-[#FFF0E6] to-[#FFE5D4] rounded-3xl p-7 border border-[#FDBA74]/35 shadow-soft-3d space-y-5">
            <h3 className="font-display text-xl text-black font-semibold italic border-b border-black/10 pb-3 tracking-wide">
              Product Guarantee
            </h3>
            <ul className="space-y-4 font-display">
              <li className="flex items-center gap-3 text-sm text-black font-medium tracking-wide">
                <span className="text-lg">✨</span> 100% Anti-Tarnish
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-medium tracking-wide">
                <span className="text-lg">💧</span> Water & Sweat Resistant
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-medium tracking-wide">
                <span className="text-lg">🌸</span> Hypoallergenic
              </li>
              <li className="flex items-center gap-3 text-sm text-black font-medium tracking-wide">
                <span className="text-lg">🚚</span> Fast Shipping Across India
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Large Premium Image, Description, Shop Now Button */}
        <div className="reveal-element flex flex-col items-center space-y-6">
          <TiltCard 
            max={6}
            className="group relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-deep-3d border border-gold/20 bg-ivory"
          >
            {/* Floating Badge */}
            <div className="absolute top-6 left-6 z-30 glass-panel px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/90">
              Studio Signature
            </div>
            
            {/* Zoom image */}
            <div className="w-full h-full overflow-hidden tilt-layer-deep">
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" 
                alt="Premium Jewellery Collection" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory/65 via-transparent to-transparent z-10" />
            </div>
          </TiltCard>

          {/* Short Description below the image */}
          <p className="text-sm sm:text-base text-ink/75 font-body leading-relaxed max-w-md text-center">
            Hand-faceted gemstone droplets set on high-purity tarnish-resistant chains. Designed carefully to mirror natural drapes and add effortless, long-lasting sparkle.
          </p>

          {/* Only one Shop Now button styled with Orange gradient */}
          <Link 
            to="/shop" 
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7A45] to-[#E57347] text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-deep-3d hover:-translate-y-0.5 hover:shadow-lg hover:scale-[1.01]"
          >
            Shop Now
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
