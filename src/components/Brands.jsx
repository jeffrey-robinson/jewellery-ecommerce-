import { brands } from '../data/content.js'

export default function Brands() {
  return (
    <section className="bg-[#FCF8F2] py-16 border-y border-[#D4AF65]/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center">
            <span className="font-display text-5xl sm:text-6xl text-[#3B183F] font-semibold">160+</span>
            <span className="text-xs uppercase tracking-widest text-[#211522]/60 mt-2 font-medium">Faceted Pieces</span>
          </div>
          
          <div className="flex flex-col items-center md:border-x border-[#D4AF65]/20 md:px-8">
            <span className="font-display text-5xl sm:text-6xl text-[#3B183F] font-semibold">4.9 / 5</span>
            <span className="text-xs uppercase tracking-widest text-[#211522]/60 mt-2 font-medium">Client Rating</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-display text-5xl sm:text-6xl text-[#3B183F] font-semibold">100%</span>
            <span className="text-xs uppercase tracking-widest text-[#211522]/60 mt-2 font-medium">Hand-Set Crafts</span>
          </div>
        </div>

        {/* Champagne Gold Divider Line */}
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF65]/40 to-transparent mx-auto mb-12" />

        {/* Brand Names list */}
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-[#211522]/50 mb-8 uppercase">
          Trusted Alongside the Houses You Know
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-base sm:text-lg tracking-wider text-[#211522]/40 hover:text-[#3B183F] hover:-translate-y-0.5 transition-all duration-300 cursor-default inline-block font-medium"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
