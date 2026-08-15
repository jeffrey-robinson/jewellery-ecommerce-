import { useEffect } from 'react'
import { Shield, Truck, RefreshCw } from 'lucide-react'
import Hero from './Hero.jsx'
import OfferBanner from './OfferBanner.jsx'

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

      {/* 2. Promotional Banner (Poster) */}
      <div className="reveal-element">
        <OfferBanner />
      </div>

      {/* 3. Editorial Promises (Instructions) */}
      <section className="bg-[#FCF8F2] py-24 border-t border-[#D4AF65]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Guarantee Promises Row */}
          <div className="reveal-element grid sm:grid-cols-3 gap-8 text-center">
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

    </div>
  )
}
