import { useState, useEffect } from 'react'
import { Phone, MapPin, Send, Check, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react'

function CartoonMail() {
  return (
    <div className="relative w-32 h-32 animate-float-soft flex items-center justify-center">
      <div className="absolute inset-0 bg-[#E6F0FA]/15 rounded-full blur-xl animate-pulse" />
      
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
        {/* Left Wing */}
        <path d="M 25,48 C 10,48 5,30 20,38 C 25,41 26,45 25,48 Z" fill="#F4F1FE" stroke="#FFFDF9" strokeWidth="1.5" />
        {/* Right Wing */}
        <path d="M 75,48 C 90,48 95,30 80,38 C 75,41 74,45 75,48 Z" fill="#F4F1FE" stroke="#FFFDF9" strokeWidth="1.5" />
        
        {/* Envelope Body */}
        <rect x="22" y="36" width="56" height="38" rx="4" fill="#FFFDF9" stroke="#1F1A2B" strokeWidth="2" />
        
        {/* Envelope flap lines */}
        <polyline points="22,37 50,56 78,37" fill="none" stroke="#1F1A2B" strokeWidth="1.5" />
        <line x1="22" y1="73" x2="42" y2="52" stroke="#1F1A2B" strokeWidth="1.5" />
        <line x1="78" y1="73" x2="58" y2="52" stroke="#1F1A2B" strokeWidth="1.5" />
        
        {/* Cute Eyes on envelope */}
        <circle cx="38" cy="62" r="3.5" fill="#1F1A2B" />
        <circle cx="62" cy="62" r="3.5" fill="#1F1A2B" />
        <circle cx="36.5" cy="60.5" r="1.5" fill="white" />
        <circle cx="60.5" cy="60.5" r="1.5" fill="white" />
        
        {/* Orange Heart Seal stamp */}
        <path d="M 50,53 C 50,53 47,49 45,51 C 43,53 47,58 50,60 C 53,58 57,53 55,51 C 53,49 50,53 50,53 Z" fill="#E36E53" stroke="#1F1A2B" strokeWidth="1" />
        
        {/* Blushing cheeks */}
        <circle cx="32" cy="65" r="2.5" fill="#FFA588" opacity="0.8" />
        <circle cx="68" cy="65" r="2.5" fill="#FFA588" opacity="0.8" />
        
        {/* Smiling mouth */}
        <path d="M 48,65 Q 50,67 52,65" fill="none" stroke="#1F1A2B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate API Request
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* Contact Hero */}
      <section className="bg-ink text-ivory py-20 relative overflow-hidden reveal-element">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-emerald/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 grid md:grid-cols-[1.5fr_1fr] items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
              Get in touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Contact JEM
            </h1>
            <p className="mt-4 text-sm text-ivory/65 max-w-lg mx-auto md:mx-0 font-body leading-relaxed">
              Whether inquiring about custom bridal bands, sizing, or tracking an heirloom, our studio is here to assist you.
            </p>
          </div>
          <div className="flex justify-center">
            <CartoonMail />
          </div>
        </div>
      </section>

      {/* Main Grid Layout */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 reveal-element">
        
        {/* Left: Contact Info details */}
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl text-ink">Studio Information</h2>
            <p className="text-xs text-ink/50 mt-1 font-body">Reach out to our specialists or schedule a private viewing</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white shadow-sm">
                <Phone size={16} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink/40 font-semibold mb-1">Telephone</h4>
                <a 
                  href="tel:9677727260" 
                  className="text-sm font-medium text-ink hover:text-gold transition-colors"
                >
                  +91 96777 27260
                </a>
                <p className="text-xs text-ink/50 font-body mt-0.5">Mon - Sat, 9am - 7pm IST</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white shadow-sm">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink/40 font-semibold mb-1">Our Flagship Location</h4>
                <p className="text-sm font-medium text-ink">Angeripalayam</p>
                <p className="text-xs text-ink/50 font-body mt-0.5">Tirupur, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0 bg-white shadow-sm">
                <Instagram size={16} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink/40 font-semibold mb-1">Instagram Page</h4>
                <a 
                  href="https://www.instagram.com/jem_minimal_jewellery?igsh=MXFyMDRnampkZTNsZA==&igsi=MXFyMDRnampkZTNsZA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-ink hover:text-gold transition-colors break-all"
                >
                  @jem_minimal_jewellery
                </a>
                <p className="text-xs text-ink/50 font-body mt-0.5">Follow for daily curation & stories</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-ink/10 pt-8">
            <h4 className="text-xs uppercase tracking-wider text-ink/40 font-semibold mb-4">Follow the Studio</h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, link: 'https://www.instagram.com/jem_minimal_jewellery?igsh=MXFyMDRnampkZTNsZA==&igsi=MXFyMDRnampkZTNsZA==' },
                { Icon: Facebook, link: 'https://facebook.com' },
                { Icon: Twitter, link: 'https://twitter.com' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Social Link"
                  className="h-10 w-10 rounded-full border border-ink/10 hover:border-gold hover:text-gold flex items-center justify-center text-ink/60 transition-colors bg-white shadow-sm"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink/5 shadow-soft-3d">
          <div className="mb-8">
            <h2 className="font-display text-2xl text-ink">Send an Inquiry</h2>
            <p className="text-xs text-ink/50 mt-1 font-body">Submit your details and our studio will reach out to you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-ivory/50 border border-ink/10 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-ink"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-ivory/50 border border-ink/10 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-ink"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-ivory/50 border border-ink/10 rounded-lg px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-ink"
              />
            </div>

            {submitted && (
              <div className="flex items-center gap-2 text-xs text-emerald font-semibold p-4 bg-emerald/5 border border-emerald/20 rounded-lg">
                <Check size={16} />
                <span>Thank you! Your information was submitted successfully. We will reach out shortly.</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={submitting}
              className="w-full py-4 rounded-full bg-ink hover:bg-gold hover:text-ink text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 duration-300 active:scale-98 disabled:opacity-50"
            >
              {submitting ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full inline-block" />
              ) : (
                <>
                  Send Message <Send size={12} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Styled Location Map Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-24 reveal-element">
        <div className="mb-8">
          <h2 className="font-display text-2xl text-ink">Our Atelier Location</h2>
          <p className="text-xs text-ink/50 mt-1 font-body">Conveniently situated in the heart of New York City</p>
        </div>

        {/* Minimalist Visual Map Mock */}
        <div className="relative h-96 rounded-3xl overflow-hidden bg-ink/90 border border-gold/15 flex items-center justify-center">
          {/* Mock Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(201,162,39,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,162,39,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Subtle concentric rings around marker */}
          <div className="absolute h-40 w-40 rounded-full border border-gold/10 animate-ping duration-[3000ms]" />
          <div className="absolute h-20 w-20 rounded-full border border-gold/20 animate-pulse duration-[1500ms]" />
          
          {/* The Marker */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="relative inline-flex h-12 w-12 items-center justify-center">
              <span className="absolute inset-0 bg-facet-gradient facet-badge animate-bounce" />
              <MapPin size={20} className="text-white relative z-10" />
            </span>
          </div>

          {/* Map Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto z-20 bg-white/95 backdrop-blur-md p-6 rounded-2xl max-w-sm border border-gold/20 shadow-soft">
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-gold font-bold mb-1">
              <Sparkles size={10} /> Visit Us
            </span>
            <h3 className="font-display text-lg text-ink font-semibold">JEM Atelier</h3>
            <p className="text-xs text-ink/70 font-body leading-relaxed mt-2">
            Angeripalayam, Tirupur<br />
            Tamil Nadu, India • Pin Code: 641603<br />
            Contact us at +91 96777 27260 to request an appointment.
            </p>
          </div>

          {/* Coordinate Watermark */}
          <div className="absolute top-6 right-8 text-[10px] tracking-widest text-gold/30 font-mono hide-xs select-none">
            11.1085° N, 77.3411° E
          </div>
        </div>
      </section>
    </div>
  )
}
