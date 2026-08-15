import { useEffect, useRef } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const artRef = useRef(null)

  // Subtle scroll parallax on the hero visual — small range, disabled for
  // users who prefer reduced motion.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (artRef.current) {
          artRef.current.style.transform = `translate3d(0, ${Math.min(y * 0.08, 40)}px, 0)`
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-[#FCF8F2] border-b border-[#D4AF65]/15">
      {/* Ambient luxury glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#E8D8EE]/30 blur-3xl animate-drift-slow" />
      <div className="pointer-events-none absolute top-10 -right-20 h-80 w-80 rounded-full bg-[#6A3578]/5 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#D4AF65]/10 blur-3xl animate-drift-slow" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#6A3578] bg-[#E8D8EE] px-3.5 py-1.5 rounded-full border border-[#6A3578]/10 shadow-sm">
            <Sparkles size={13} className="text-[#D4AF65] animate-[spin_6s_linear_infinite]" />
            THE AUTUMN FACET EDIT
          </span>

          <h1 className="font-display font-medium text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] text-[#211522] mt-6">
            Timeless Jewellery.
            <span className="block italic text-[#6A3578]">Made to be remembered.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#211522]/70 max-w-md leading-relaxed font-body">
            Minimal settings, maximal sparkle. Each JEM piece is faceted by hand to catch light from every angle — designed to move from desk to dinner without missing a beat.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/shop"
              className="group inline-flex items-center gap-2 bg-[#6A3578] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Shop Now
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4AF65]" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-[#211522]/10 pt-7">
            <div>
              <dt className="text-xs text-[#211522]/50 uppercase tracking-wide">Pieces</dt>
              <dd className="font-display text-2xl text-[#3B183F] font-semibold mt-1">160+</dd>
            </div>
            <div>
              <dt className="text-xs text-[#211522]/50 uppercase tracking-wide">Rated</dt>
              <dd className="font-display text-2xl text-[#3B183F] font-semibold mt-1">4.9 / 5</dd>
            </div>
            <div>
              <dt className="text-xs text-[#211522]/50 uppercase tracking-wide">Hand-set</dt>
              <dd className="font-display text-2xl text-[#3B183F] font-semibold mt-1">100%</dd>
            </div>
          </dl>
        </div>

        {/* Faceted visual */}
        <div className="relative" style={{ perspective: '1400px' }}>
          <div ref={artRef} className="facet-hero relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden shadow-deep-3d border border-[#D4AF65]/20 bg-white">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
              alt="Model wearing a faceted JEM necklace and earrings"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211522]/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>

          {/* Floating price/facet chip */}
          <div className="absolute -bottom-6 -left-6 sm:-left-10 glass-panel rounded-2xl shadow-deep-3d px-5 py-4 flex items-center gap-3 animate-float-soft border border-[#D4AF65]/35 bg-white/95">
            <div className="h-10 w-10 facet-badge bg-facet-gradient shrink-0 shimmer-wrap" />
            <div>
              <p className="text-xs text-[#211522]/50">Featured piece</p>
              <p className="font-display text-lg text-[#211522] leading-tight">Ember Necklace</p>
            </div>
          </div>

          <div className="absolute -top-5 -right-3 sm:-right-8 bg-[#6A3578] text-white border border-[#D4AF65]/40 rounded-full h-20 w-20 flex flex-col items-center justify-center text-center shadow-deep-3d rotate-6 animate-float-soft animate-glow-pulse" style={{ animationDelay: '0.4s' }}>
            <span className="font-display text-lg leading-none font-semibold">−20%</span>
            <span className="text-[10px] tracking-wide mt-0.5 text-[#D4AF65] font-bold">TODAY</span>
          </div>
        </div>
      </div>

      {/* Feature Strip Banner */}
      <div className="border-t border-[#D4AF65]/15 bg-[#FCF8F2] py-4.5 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#211522]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF65]" />
                100% Anti-Tarnish
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF65]" />
                Water & Sweat Resistant
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF65]" />
                Hypoallergenic
              </span>
            </div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#6A3578] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF65]" />
              Fast Shipping Across India
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
