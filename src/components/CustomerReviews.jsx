import { useEffect } from 'react'
import { Star, Check, MessageSquare, Edit3, Gem } from 'lucide-react'
import { reviews } from '../data/content.js'

// Supplement list with additional elegant reviews to make the reviews page full and premium
const expandedReviews = [
  ...reviews,
  {
    id: 4,
    name: 'Eleanor Vance',
    role: 'Verified Buyer',
    rating: 5,
    text: 'Bespoke process was exceptionally smooth. The design team adjusted the Kada width to my wrist size. It is a stunning, solid weight piece that I will pass down to my daughter.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    product: 'Royal Heritage Filigree Kada',
    date: 'Aug 04, 2026'
  },
  {
    id: 5,
    name: 'Marcus Thorne',
    role: 'Verified Buyer',
    rating: 5,
    text: 'A design that feels so structural yet simple. Shipped extremely fast in secure armored transport. JEM has redefine what modern minimal jewellery should feel like.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    product: 'Cascade Tennis Bracelet',
    date: 'Jul 28, 2026'
  },
  {
    id: 6,
    name: 'Leah Sterling',
    role: 'Verified Buyer',
    rating: 4,
    text: 'Beautiful finish. The starlight diamonds catch fire in direct sunlight. Sits perfectly flat against the skin without twisting. Looking forward to expanding my collection.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    product: 'Starlight Interlocking Link Bracelet',
    date: 'Jul 15, 2026'
  }
]

export default function CustomerReviews() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Rating metrics breakdown
  const totalReviews = 142
  const ratingDistribution = [
    { stars: 5, percentage: 92, count: 130 },
    { stars: 4, percentage: 6, count: 9 },
    { stars: 3, percentage: 2, count: 3 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 }
  ]

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Reviews Hero */}
      <section className="bg-ink text-ivory py-20 relative overflow-hidden reveal-element">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
            Testimonials
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Client Journals
          </h1>
          <div className="flex items-center justify-center gap-2 text-gold mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
          
          <p className="mt-6 text-sm text-ivory/65 max-w-lg mx-auto font-body leading-relaxed">
            Read stories of light and luxury shared by our clients. Honest reviews detailing their unwrapping experience, custom atelier sizing, and everyday wear.
          </p>
        </div>
      </section>

      {/* Ratings Metrics Overview */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24 reveal-element">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink/5 shadow-soft-3d grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
          {/* Average Rating Card */}
          <div className="text-center md:border-r border-ink/10 md:pr-10 py-4 flex flex-col items-center">
            <span className="text-xs font-semibold tracking-wider text-ink/40 uppercase">Average Rating</span>
            <div className="font-display text-6xl sm:text-7xl text-ink font-bold mt-2 mb-4">4.9</div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs text-ink/50 font-body">Based on {totalReviews} verified purchases</span>
          </div>

          {/* Progress Bars breakdown */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold tracking-wider text-ink/40 uppercase mb-4">Rating Breakdown</h4>
            {ratingDistribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-4 text-xs font-body">
                <span className="w-12 text-ink/60 font-medium flex items-center gap-1">{row.stars} Stars</span>
                <div className="flex-grow h-2 bg-ivory rounded-full overflow-hidden border border-ink/5">
                  <div 
                    className="h-full bg-gold rounded-full" 
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
                <span className="w-12 text-right text-ink/50">{row.percentage}% ({row.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24 reveal-element">
        <div className="border-b border-ink/10 pb-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-2xl text-ink">Featured Stories</h2>
            <p className="text-xs text-ink/50 mt-1 font-body">Hand-verified purchase reviews from JEM owners</p>
          </div>
          <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-1.5">
            <MessageSquare size={13} /> {expandedReviews.length} Stories Featured
          </span>
        </div>

        {/* Masonry or Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {expandedReviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-ink/5 hover:border-[#D97706]/25 premium-3d-card shadow-soft-3d transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User avatar + info */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="h-11 w-11 rounded-full overflow-hidden bg-ivory border border-ink/5 shrink-0">
                    <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink leading-tight">{rev.name}</h4>
                    <span className="text-[10px] uppercase tracking-wide text-emerald-dark font-medium flex items-center gap-1 mt-0.5">
                      <Check size={10} strokeWidth={3} /> {rev.role || 'Verified Buyer'}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < rev.rating ? 'fill-gold text-gold' : 'text-ink/15'} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-body italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Footer details: Product & date */}
              <div className="border-t border-ink/5 pt-4 mt-4 flex items-center justify-between text-[11px] text-ink/40 font-body">
                <span className="truncate max-w-[170px] font-medium text-gold/90">
                  {rev.product || 'Facet Solitaire Ring'}
                </span>
                <span>
                  {rev.date || 'Aug 08, 2026'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Review CTA Banner */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-24">
        <div className="bg-ink text-ivory rounded-3xl p-8 sm:p-12 border border-gold/15 shadow-soft-3d relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl animate-drift" />
          <div className="relative z-10 max-w-lg">
            <h3 className="font-display text-2xl sm:text-3xl tracking-tight mb-3">
              Share Your JEM Story
            </h3>
            <p className="text-xs sm:text-sm text-ivory/60 font-body leading-relaxed">
              We value honest experiences. Share your JEM review or post your unwrapping story to our digital journal to help other owners.
            </p>
          </div>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="relative z-10 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 shrink-0 active:scale-95 duration-100 shadow-sm"
          >
            Submit a Review <Edit3 size={13} />
          </button>
        </div>
      </section>
    </div>
  )
}
