import { useEffect } from 'react'
import { Sparkles, Eye, Compass, Shield } from 'lucide-react'
import TiltCard from './TiltCard.jsx'

export default function HomeShowcase() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-reveal')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    const elements = document.querySelectorAll('.reveal-element')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="bg-ivory min-h-screen w-full overflow-hidden">
      
      {/* SECTION 1: THE NECKLACE (Luxury Dark Emerald Theme) */}
      <section className="min-h-screen w-full bg-ivory text-ink flex items-center justify-center relative py-24 px-5 sm:px-8 border-b border-gold/10">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-1/4 left-10 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl animate-drift-slow z-0" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl animate-drift z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(227,110,83,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-25 z-0" />

        {/* Floating 3D Stickers */}
        <div className="absolute left-[5%] top-[8%] luxury-sticker luxury-sticker-orange animate-sticker-1 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          Special Offer
        </div>
        <div className="absolute right-[6%] top-[10%] luxury-sticker animate-sticker-2 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          Limited Offer
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left Text Column */}
          <div className="reveal-element flex flex-col items-start text-left space-y-6">
            <span className="glass-panel flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold px-4 py-2 rounded-full border border-gold/20 shadow-glow animate-glow-pulse">
              <Sparkles size={12} className="animate-spin duration-[4000ms]" /> Elite Curation
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight">
              The Facet <br />
              <span className="italic text-gold">Necklace Series</span>
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-gold to-transparent" />
            <p className="text-sm sm:text-base text-ink/75 font-body leading-relaxed max-w-lg">
              Designed with precision-milled micro-hinges, each drape aligns flawlessly against the collarbone. Hand-faceted solitaire stones catch and break ambient light, creating a signature sparkle tailored for high-profile evenings and structural everyday elegance.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-gold/80">
              <span className="flex items-center gap-1.5"><Eye size={14} /> Refined Silhouette</span>
              <span className="h-4 w-[1px] bg-ink/20" />
              <span>18kt Yellow Gold</span>
            </div>
          </div>

          {/* Right Image Column (3D Card) */}
          <div className="reveal-element flex justify-center">
            <TiltCard 
              max={6}
              className="group relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-deep-3d border border-gold/20 bg-ivory"
            >
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-30 glass-panel px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/90">
                Studio Signature
              </div>
              {/* Glare and Zoom image */}
              <div className="w-full h-full overflow-hidden tilt-layer-deep">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80" 
                  alt="Facet Solitaire Necklace Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivory/65 via-transparent to-transparent z-10" />
              </div>
              {/* Inner details card floating on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-5 rounded-2xl border border-gold/15 tilt-layer-inner shadow-soft">
                <h4 className="font-display text-base text-gold">The Solitaire Droplet</h4>
                <p className="text-[11px] text-ink/60 font-body mt-1">Draped in 18kt gold with a 1.5ct flawless VVS1 emerald-cut diamond diamond highlight.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE KADA (Luxury Ivory & Satin Gold Theme) */}
      <section className="min-h-screen w-full bg-ivory text-ink flex items-center justify-center relative py-24 px-5 sm:px-8 border-b border-ink/5">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute bottom-1/4 left-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-drift z-0" />
        <div className="pointer-events-none absolute top-10 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-drift-slow z-0" />

        {/* Floating 3D Stickers */}
        <div className="absolute left-[8%] top-[10%] luxury-sticker animate-sticker-3 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          30% OFF
        </div>
        <div className="absolute right-[10%] bottom-[8%] luxury-sticker luxury-sticker-orange animate-sticker-1 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          Flat ₹100 Off
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left Image Column (3D Card) - Inverted Layout */}
          <div className="reveal-element flex justify-center order-2 lg:order-1">
            <TiltCard 
              max={6}
              className="group relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft-3d border border-ink/5 bg-white"
            >
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 z-30 glass-panel px-4 py-2 rounded-full border border-ink/5 text-[10px] uppercase tracking-widest text-ink/80">
                Heritage Design
              </div>
              {/* Glare and Zoom image */}
              <div className="w-full h-full overflow-hidden tilt-layer-deep">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80" 
                  alt="Royal Heritage Filigree Kada Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent z-10" />
              </div>
              {/* Inner details card floating on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-5 rounded-2xl border border-gold/20 tilt-layer-inner shadow-soft">
                <h4 className="font-display text-base text-gold-dark">Filigree Heritage Kada</h4>
                <p className="text-[11px] text-ink/60 font-body mt-1">Brushed gold finish featuring detailed structural open-work and safety click lock.</p>
              </div>
            </TiltCard>
          </div>

          {/* Right Text Column */}
          <div className="reveal-element flex flex-col items-start text-left space-y-6 order-1 lg:order-2">
            <span className="glass-panel flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold px-4 py-2 rounded-full border border-gold/35 shadow-sm">
              <Compass size={12} className="animate-pulse" /> Master Craftsmanship
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight">
              The Brushed <br />
              <span className="italic text-gold-dark">Heritage Kada</span>
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-gold-dark to-transparent" />
            <p className="text-sm sm:text-base text-ink/70 font-body leading-relaxed max-w-lg">
              Cast in solid antique-brushed yellow gold, this Kada displays fine open-work filigree borders. Engineered with a flat interior comfort fit and dual-release hidden security latch, it stands alone as a striking heritage cuff or balances with thin bracelets.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-ink/65">
              <span className="flex items-center gap-1.5"><Compass size={14} /> Antique Textured Gold</span>
              <span className="h-4 w-[1px] bg-ink/10" />
              <span>Uncut Polki Accents</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BRACELET (Luxury Navy & Sapphire Theme) */}
      <section className="min-h-screen w-full bg-ivory text-ink flex items-center justify-center relative py-24 px-5 sm:px-8">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-1/4 right-10 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl animate-drift z-0" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl animate-drift-slow z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(227,110,83,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 z-0" />

        {/* Floating 3D Stickers */}
        <div className="absolute left-[10%] bottom-[10%] luxury-sticker luxury-sticker-orange animate-sticker-2 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          20% OFF
        </div>
        <div className="absolute right-[8%] top-[8%] luxury-sticker animate-sticker-3 text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-2">
          Special Offer
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left Text Column */}
          <div className="reveal-element flex flex-col items-start text-left space-y-6">
            <span className="glass-panel flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold px-4 py-2 rounded-full border border-gold/20 shadow-glow">
              <Shield size={12} /> Modern Heirloom
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight">
              The Starlight <br />
              <span className="italic text-gold">Link Bracelet</span>
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-gold to-transparent" />
            <p className="text-sm sm:text-base text-ink/75 font-body leading-relaxed max-w-lg">
              Bold interlocking geometric chains, hand-assembled and studded with micro-pave diamond elements. Designed to mimic the natural curve of the wrist, catching light at every angle with comfortable, fluid movements.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-gold/80">
              <span className="flex items-center gap-1.5"><Shield size={14} /> Comfort-Lock Clasp</span>
              <span className="h-4 w-[1px] bg-ivory/20" />
              <span>18kt Rose Gold / Platinum</span>
            </div>
          </div>

          {/* Right Image Column (3D Card) */}
          <div className="reveal-element flex justify-center">
            <TiltCard 
              max={6}
              className="group relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-deep-3d border border-gold/20 bg-ivory"
            >
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-30 glass-panel px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/90">
                Limited Release
              </div>
              {/* Glare and Zoom image */}
              <div className="w-full h-full overflow-hidden tilt-layer-deep">
                <img 
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80" 
                  alt="Starlight Link Bracelet Design" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ivory/75 via-transparent to-transparent z-10" />
              </div>
              {/* Inner details card floating on hover */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-5 rounded-2xl border border-gold/15 tilt-layer-inner shadow-soft">
                <h4 className="font-display text-base text-gold">Starlight Link Cuff</h4>
                <p className="text-[11px] text-ink/60 font-body mt-1">Interlocking links hand-set with brilliant-cut diamonds, fitted with custom safety lock.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

    </div>
  )
}
