import { categories } from '../data/content.js'
import { ArrowRight } from 'lucide-react'

const ring = {
  emerald: 'from-emerald/25 to-emerald/0 text-emerald-dark',
  ruby: 'from-ruby/25 to-ruby/0 text-ruby-dark',
  gold: 'from-gold/30 to-gold/0 text-gold-dark',
  sapphire: 'from-sapphire/25 to-sapphire/0 text-sapphire',
}

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <div className="flex items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-semibold tracking-[0.18em] text-ruby-dark">SHOP BY CATEGORY</span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mt-3">Find your facet.</h2>
        </div>
        <a href="#products" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-emerald-dark transition-colors">
          View all <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {categories.map((c) => (
          <a
            href="#products"
            key={c.name}
            className="group relative rounded-3xl overflow-hidden bg-white border border-ink/5 shadow-sm hover:shadow-soft transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${ring[c.color]} opacity-70`} />
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={c.img}
                alt={c.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative p-4 sm:p-5 bg-white">
              <h3 className="font-display text-lg text-ink">{c.name}</h3>
              <p className="text-xs text-ink/50 mt-0.5">{c.count}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
