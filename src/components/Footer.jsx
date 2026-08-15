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
    <footer className="relative bg-[#3B183F] text-white overflow-hidden border-t border-[#D4AF65]/20">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF65]/30 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#D4AF65]/5 blur-3xl animate-drift-slow" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2.5">
              <img 
                src="https://res.cloudinary.com/djqflcckm/image/upload/v1786556786/logo_image_asmv3g.jpg" 
                alt="Brand Logo" 
                className="h-10 w-10 object-cover rounded-full shadow-sm border border-[#D4AF65]/20"
              />
              <span className="font-display font-medium text-lg tracking-wider text-white">JEM</span>
            </div>
            <p className="text-sm text-white/60 mt-4 max-w-xs leading-relaxed">
              Minimal jewellery, faceted by hand. Cut for everyday light.
            </p>

            <form className="mt-6 max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="text-xs uppercase tracking-wide text-[#D4AF65]/70 font-semibold">
                Join the list
              </label>
              <div className="mt-2 flex items-center bg-[#211522]/40 rounded-full pl-4 pr-1.5 py-1.5 focus-within:ring-1 focus-within:ring-[#D4AF65] border border-[#D4AF65]/20 transition-shadow">
                <Mail size={15} className="text-white/50 shrink-0" />
                <input
                  id="newsletter"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 px-2.5 py-1 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-[#6A3578] text-white hover:bg-[#D4AF65] hover:text-[#3B183F] transition-all duration-300 shadow-sm"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide mb-4 text-[#D4AF65]">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-white/60 hover:text-[#D4AF65] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-7 border-t border-[#D4AF65]/10">
          <p className="text-xs text-white/45">© {new Date().getFullYear()} JEM Minimal Jewellery. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-[#D4AF65] hover:text-[#3B183F] transition-all duration-300"
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
