import { brands } from '../data/content.js'

export default function Brands() {
  return (
    <section className="bg-blush/40 py-14 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-ink/45 mb-8">
          TRUSTED ALONGSIDE THE HOUSES YOU KNOW
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-lg sm:text-xl tracking-wide text-ink/35 hover:text-ink/70 transition-colors cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
