import { ArrowUpRight } from 'lucide-react'

export default function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-facet-gradient opacity-90" />
      <div className="absolute -bottom-16 -right-16 h-64 w-64 facet-badge bg-white/10 animate-drift-slow" />
      <div className="absolute -top-10 left-10 h-32 w-32 facet-badge bg-white/10 hidden sm:block animate-drift" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div>
          <span className="glass-panel-dark inline-block text-xs font-semibold tracking-[0.18em] text-white/85 px-3 py-1.5 rounded-full">LIMITED TIME</span>
          <h2 className="font-display text-3xl sm:text-5xl text-white mt-3 leading-tight">
            20% off your first
            <span className="italic"> JEM piece.</span>
          </h2>
          <p className="text-white/75 mt-4 max-w-md mx-auto lg:mx-0">
            New to JEM? Take a fifth off your first order and get free resizing on every ring, always.
          </p>
        </div>

        <a
          href="/collections"
          className="shimmer-wrap group inline-flex items-center gap-2 bg-white text-ink px-8 py-4 rounded-full font-medium text-sm hover:bg-[#D97706] hover:text-white transition-colors duration-300 shrink-0 shadow-deep-3d hover:-translate-y-0.5 duration-300"
        >
          Claim the Offer
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  )
}
