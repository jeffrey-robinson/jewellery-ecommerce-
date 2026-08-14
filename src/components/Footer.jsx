import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Gift Cards'],
  },
  {
    title: 'About',
    links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Journal'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Sizing Guide', 'Shipping & Returns', 'FAQs'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl animate-drift-slow" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2.5">
              <img 
                src="https://res.cloudinary.com/djqflcckm/image/upload/v1786556786/logo_image_asmv3g.jpg" 
                alt="Brand Logo" 
                className="h-10 w-10 object-cover rounded-full shadow-sm"
              />
            </div>
            <p className="text-sm text-ivory/60 mt-4 max-w-xs leading-relaxed">
              Minimal jewellery, faceted by hand. Cut for everyday light.
            </p>

            <form className="mt-6 max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="text-xs uppercase tracking-wide text-ivory/50">
                Join the list
              </label>
              <div className="mt-2 flex items-center glass-panel-dark rounded-full pl-4 pr-1.5 py-1.5 focus-within:ring-1 focus-within:ring-gold transition-shadow">
                <Mail size={15} className="text-ivory/50 shrink-0" />
                <input
                  id="newsletter"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory/40 px-2.5 py-1 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-gold text-ink hover:bg-gold-light transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-ivory/60 hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-7 border-t border-ivory/10">
          <p className="text-xs text-ivory/45">© {new Date().getFullYear()} JEM Minimal Jewellery. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-ivory/60 hover:bg-gold hover:text-ink transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
