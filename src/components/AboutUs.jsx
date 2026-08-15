import { useEffect } from 'react'
import { Sparkles, Gem, Heart, Shield } from 'lucide-react'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#FCF8F2] min-h-screen text-[#211522] pb-24">
      {/* Editorial Hero Banner */}
      <section className="bg-[#3B183F] text-white py-20 relative overflow-hidden reveal-element border-b border-[#D4AF65]/20">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF65_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-[#6A3578]/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold mb-3 inline-block">
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Behind JEM Jewellery
          </h1>
          <div className="flex items-center justify-center gap-2 text-[#D4AF65] mt-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF65]" />
            <Sparkles size={16} className="animate-[spin_8s_linear_infinite]" />
            <Gem size={14} className="animate-pulse" />
            <Sparkles size={16} className="animate-[spin_8s_linear_infinite]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF65]" />
          </div>
          <p className="mt-6 text-sm sm:text-base text-white/70 max-w-lg mx-auto font-body leading-relaxed">
            Crafting fine jewellery for everyday light. Minimalist designs, high-end quality, made to feel like you.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24 reveal-element">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Premium Brand Visual */}
          <div className="lg:col-span-5 relative" style={{ perspective: '1400px' }}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#D4AF65]/25 bg-white shadow-deep-3d hover:scale-[1.01] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
                alt="Minimal gold neck chains on silk fabric"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211522]/30 via-transparent to-transparent" />
            </div>
            {/* Elegant Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-[#D4AF65]/30 rounded-2xl p-4 shadow-soft flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E8D8EE] flex items-center justify-center text-[#6A3578] font-bold shadow-sm">
                ✨
              </div>
              <div>
                <p className="text-[10px] text-[#211522]/50 uppercase tracking-wider font-semibold">The JEM Philosophy</p>
                <p className="font-display text-xs text-[#3B183F] font-bold">Less is more, always.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Gowthami's Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#6A3578] font-bold mb-3 flex items-center gap-1.5">
              <Heart size={14} className="text-[#D4AF65] fill-[#D4AF65]" /> Gowthami's Vision
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl text-[#3B183F] leading-tight mb-8 font-semibold">
              It started with one girl: Gowthami. ✨
            </h2>

            <div className="space-y-6 text-[#211522]/80 font-body text-base leading-relaxed">
              <p className="text-lg text-[#3B183F]/90 font-medium italic border-l-2 border-[#D4AF65] pl-4">
                She was tired of choosing between pretty, good quality, and affordable.
              </p>
              
              <p>
                So she created jewellery she’d actually wear every day. 
                Our design signature is clear: <span className="font-semibold text-[#6A3578]">Minimal. Timeless. Made to feel like you.</span>
              </p>
              
              <div className="bg-[#E8D8EE]/30 p-6 rounded-2xl border border-[#E8D8EE]/60 mt-4">
                <p className="font-display font-medium text-base text-[#3B183F]">
                  That’s how Jem Minimal Jewellery began 💜
                </p>
                <p className="text-xs text-[#211522]/70 mt-1">
                  For the girls who like less, but feel more.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Brand Philosophy Quote Banner */}
      <section className="bg-[#3B183F] text-white py-20 mt-20 lg:mt-28 relative overflow-hidden reveal-element border-y border-[#D4AF65]/20">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF65_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        <div className="pointer-events-none absolute -bottom-1/2 left-1/3 h-96 w-96 rounded-full bg-[#D4AF65]/5 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <div className="inline-flex p-3 rounded-full bg-white/5 border border-[#D4AF65]/20 mb-6 text-[#D4AF65]">
            <Gem size={28} className="animate-pulse" />
          </div>
          
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-white/95 leading-normal max-w-3xl mx-auto font-light">
            “Jewellery isn’t the last thing you wear. <br className="hidden sm:inline" />
            It’s the first thing you remember.”
          </blockquote>
          
          <div className="h-[1px] w-20 bg-[#D4AF65]/50 mx-auto mt-8 mb-4" />
          <cite className="text-xs uppercase tracking-[0.2em] text-[#D4AF65] font-semibold not-italic">
            JEM MINIMAL JEWELLERY
          </cite>
        </div>
      </section>

      {/* Brand Promises Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-20 lg:mt-28 reveal-element">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-[#6A3578] font-bold">Why Jem?</span>
          <h3 className="font-display text-2xl sm:text-3xl text-[#211522] mt-2 font-semibold border-b-0 pb-0">Crafted with Intention</h3>
          <p className="text-xs sm:text-sm text-[#211522]/50 mt-3 leading-relaxed">
            Every piece is designed to tell a story while adhering to our commitment of high quality and everyday comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-[#E8D8EE] shadow-soft hover:shadow-md transition-shadow duration-300">
            <div className="h-10 w-10 rounded-full bg-[#FCF8F2] border border-[#D4AF65]/25 flex items-center justify-center text-[#6A3578] mb-6 shadow-sm">
              <Shield size={16} className="text-[#D4AF65]" />
            </div>
            <h4 className="font-display text-lg text-[#211522] font-semibold mb-3">Tarnish Resistant</h4>
            <p className="text-xs text-[#211522]/65 leading-relaxed">
              We employ advanced gold-dipping and protective processes ensuring all necklaces, bracelets, and rings keep their gold shine and resist everyday humidity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-[#E8D8EE] shadow-soft hover:shadow-md transition-shadow duration-300">
            <div className="h-10 w-10 rounded-full bg-[#FCF8F2] border border-[#D4AF65]/25 flex items-center justify-center text-[#6A3578] mb-6 shadow-sm">
              <Gem size={16} className="text-[#D4AF65]" />
            </div>
            <h4 className="font-display text-lg text-[#211522] font-semibold mb-3">Made to Wear Every Day</h4>
            <p className="text-xs text-[#211522]/65 leading-relaxed">
              Lightweight profiles, rounded edges, and allergen-free settings make JEM designs feel like a second skin. Designed for morning workouts, work hours, and evening cocktails.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-[#E8D8EE] shadow-soft hover:shadow-md transition-shadow duration-300">
            <div className="h-10 w-10 rounded-full bg-[#FCF8F2] border border-[#D4AF65]/25 flex items-center justify-center text-[#6A3578] mb-6 shadow-sm">
              <Heart size={16} className="text-[#D4AF65]" />
            </div>
            <h4 className="font-display text-lg text-[#211522] font-semibold mb-3">Honest Luxury Pricing</h4>
            <p className="text-xs text-[#211522]/65 leading-relaxed">
              By working directly with master jewelers and cutting out traditional high retail markups, we deliver fine quality at prices you can feel good about.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
