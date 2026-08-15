import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/content.js'

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 bg-[#FCF8F2] border-t border-[#D4AF65]/10">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#6A3578] uppercase">Worn &amp; Loved</span>
        <h2 className="font-display text-4xl sm:text-5xl text-[#211522] mt-3">What Our Circle Says</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 perspective-1000">
        {reviews.map((r) => (
          <figure
            key={r.id}
            className="relative bg-white rounded-[2rem] border border-[#E8D8EE] hover:border-[#D4AF65]/40 p-8 premium-3d-card shadow-soft transition-all duration-500"
          >
            <Quote size={28} className="text-[#E8D8EE] mb-4" />
            <blockquote className="text-[#211522]/80 text-sm leading-relaxed font-body italic">
              "{r.text}"
            </blockquote>

            <div className="flex items-center gap-0.5 mt-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className={i < r.rating ? 'fill-[#D4AF65] text-[#D4AF65]' : 'text-gray-200'} />
              ))}
            </div>

            <figcaption className="flex items-center gap-3.5 mt-6 pt-6 border-t border-[#E8D8EE]">
              <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover border border-[#D4AF65]/20 shadow-sm" />
              <div>
                <p className="font-semibold text-sm text-[#211522] leading-tight">{r.name}</p>
                <p className="text-xs text-[#211522]/50 mt-0.5">{r.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
