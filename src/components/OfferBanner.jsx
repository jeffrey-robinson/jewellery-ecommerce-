import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-[#3B183F] border-y border-[#D4AF65]/20">
      {/* Decorative ambient blobs */}
      <div className="absolute -bottom-16 -right-16 h-64 w-64 facet-badge bg-[#D4AF65]/5 animate-drift-slow" />
      <div className="absolute -top-10 left-10 h-32 w-32 facet-badge bg-[#6A3578]/10 hidden sm:block animate-drift" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div>
          <span className="bg-[#6A3578]/40 border border-[#D4AF65]/30 inline-block text-xs font-semibold tracking-[0.25em] text-white px-4 py-1.5 rounded-full shadow-sm">
            LIMITED TIME
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white mt-4 leading-tight">
            20% off your first
            <span className="italic text-[#D4AF65]"> JEM piece.</span>
          </h2>
          <p className="text-white/75 mt-4 max-w-md mx-auto lg:mx-0 font-body leading-relaxed text-sm sm:text-base">
            New to JEM? Take a fifth off your first order and get free resizing on every ring, always.
          </p>
        </div>

        <Link
          to="/collections"
          className="shimmer-wrap group inline-flex items-center gap-2 bg-[#FCF8F2] text-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#6A3578] hover:text-white transition-all duration-300 shrink-0 shadow-deep-3d hover:-translate-y-0.5"
        >
          Claim the Offer
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4AF65]" />
        </Link>
      </div>
    </section>
  )
}
