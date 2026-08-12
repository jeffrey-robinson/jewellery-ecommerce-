import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/content.js'

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-[0.18em] text-gold-dark">WORN &amp; LOVED</span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3">What our circle is saying.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure
            key={r.id}
            className="relative bg-white rounded-3xl border border-ink/5 p-7 shadow-sm hover:shadow-soft transition-shadow duration-300"
          >
            <Quote size={28} className="text-emerald/25 mb-3" />
            <blockquote className="text-ink/75 text-sm leading-relaxed">
              "{r.text}"
            </blockquote>

            <div className="flex items-center gap-1 mt-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className={i < r.rating ? 'fill-gold text-gold' : 'text-ink/15'} />
              ))}
            </div>

            <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-ink/10">
              <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="font-medium text-sm text-ink">{r.name}</p>
                <p className="text-xs text-ink/45">{r.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
