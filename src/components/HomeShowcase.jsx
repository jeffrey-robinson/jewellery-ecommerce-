import { useEffect } from 'react'
import { Shield, Truck, RefreshCw } from 'lucide-react'
import Hero from './Hero.jsx'
import Brands from './Brands.jsx'
import Categories from './Categories.jsx'
import Products from './Products.jsx'
import OfferBanner from './OfferBanner.jsx'
import Reviews from './Reviews.jsx'
import TiltCard from './TiltCard.jsx'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-element')
      elements.forEach((el) => observer.observe(el))
    }, 200)

    return () => {
      clearTimeout(timer)
      const elements = document.querySelectorAll('.reveal-element')
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="bg-[#FCF8F2] min-h-screen w-full overflow-hidden">
      
      {/* 1. Large Hero Section */}
      <div className="reveal-element">
        <Hero />
      </div>

      {/* 2. Brand Statistics & Trusted Logos */}
      <div className="reveal-element">
        <Brands />
      </div>

      {/* 3. Editorial Collections Section */}
      <div className="reveal-element">
        <Categories />
      </div>

      {/* 4. Promotional Banner (Offer) */}
      <div className="reveal-element">
        <OfferBanner />
      </div>

      {/* 5. Product Presentation Showcase */}
      <div className="reveal-element">
        <Products />
      </div>

      {/* 6. Editorial Brand Story & Promises */}
      <section className="bg-[#FCF8F2] py-24 border-t border-[#D4AF65]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* LEFT: Narrative */}
            <div className="reveal-element flex flex-col items-start space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6A3578] uppercase">OUR HERITAGE</span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#211522] leading-tight">
                Designed to Celebrate You
              </h2>
              {/* Premium Gold Divider */}
              <div className="h-0.5 w-16 bg-[#D4AF65]" />
              <p className="text-sm sm:text-base text-[#211522]/70 leading-relaxed font-body">
                At JEM, we believe that luxury is in the details, not the excess. Our atelier focuses on clean geometric silhouettes, high-purity tarnish-resistant settings, and hand-selected stones that capture everyday light. 
              </p>
              <p className="text-sm sm:text-base text-[#211522]/70 leading-relaxed font-body">
                Every single piece is designed to tell a story of grace and modern sophistication, crafted painstakingly by hand so it moves with you from desk to dinner seamlessly.
              </p>
              <Link 
                to="/shop" 
                className="group inline-flex items-center gap-2 bg-[#6A3578] text-white border border-[#D4AF65]/35 hover:border-[#D4AF65] px-7 py-3 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#3B183F] transition-all duration-300 shadow-sm"
              >
                Explore Our Craft 
                <ArrowRight size={13} className="text-[#D4AF65] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            
            {/* RIGHT: Editorial Visual */}
            <div className="reveal-element flex justify-center">
              <TiltCard 
                max={6}
                className="group relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft border border-[#D4AF65]/20 bg-white"
              >
                <div className="absolute inset-0 bg-[#3B183F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80"
                  alt="Crafting JEM Jewellery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </TiltCard>
            </div>
          </div>

          {/* Guarantee Promises Row */}
          <div className="reveal-element grid sm:grid-cols-3 gap-8 text-center pt-16 border-t border-[#D4AF65]/15">
            <div className="flex flex-col items-center p-6 bg-white rounded-[2rem] border border-[#E8D8EE] shadow-soft">
              <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] mb-4 bg-[#FCF8F2] shadow-sm">
                <Shield size={20} className="text-[#D4AF65]" />
              </div>
              <h4 className="font-display text-lg mb-2 text-[#211522] font-semibold">100% Anti-Tarnish</h4>
              <p className="text-xs text-[#211522]/60 max-w-xs leading-relaxed font-body">
                Specially treated premium plating to ensure your jewelry remains bright, lustrous, and tarnish-resistant for years of everyday wear.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-[2rem] border border-[#E8D8EE] shadow-soft">
              <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] mb-4 bg-[#FCF8F2] shadow-sm">
                <Truck size={20} className="text-[#D4AF65]" />
              </div>
              <h4 className="font-display text-lg mb-2 text-[#211522] font-semibold">Fast Shipping Across India</h4>
              <p className="text-xs text-[#211522]/60 max-w-xs leading-relaxed font-body">
                Express premium delivery safely dispatched to your doorstep with signature confirmation and fully insured transit across India.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-[2rem] border border-[#E8D8EE] shadow-soft">
              <div className="h-12 w-12 rounded-full border border-[#D4AF65]/40 flex items-center justify-center text-[#6A3578] mb-4 bg-[#FCF8F2] shadow-sm">
                <RefreshCw size={20} className="text-[#D4AF65]" />
              </div>
              <h4 className="font-display text-lg mb-2 text-[#211522] font-semibold">Hypoallergenic & Water Resistant</h4>
              <p className="text-xs text-[#211522]/60 max-w-xs leading-relaxed font-body">
                Completely nickel-free, lead-free composition offering complete water and sweat resistance, designed carefully for sensitive skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials Section */}
      <div className="reveal-element">
        <Reviews />
      </div>

    </div>
  )
}
