import { useState, useEffect } from 'react'
import { Send, Check, Phone, MapPin, Sparkles, Instagram, Gem } from 'lucide-react'

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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
            Get in touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Contact JEM
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
            Whether inquiring about custom bridal bands, sizing, or tracking an heirloom, our studio is here to assist you.
          </p>
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
            {/* Telephone */}
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

            {/* Our Flagship Location */}
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

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full border border-emerald/30 flex items-center justify-center text-emerald shrink-0 bg-white shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#25D366]">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.638 1.968 14.174 1.944 12 1.944c-5.437 0-9.862 4.373-9.866 9.802-.002 1.83.5 3.606 1.454 5.168L2.6 21.432l4.047-1.278zM17.18 14.49c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-1.024-.915-1.492-1.954-1.692-2.304-.2-.35-.021-.539.129-.689.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.49-.508-.675-.518-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 3.1-1.05 3.325 0 .225.175.45.3.625.125.175 2.112 3.225 5.112 4.525.714.31 1.272.495 1.706.633.715.227 1.365.195 1.879.119.573-.085 1.782-.729 2.032-1.433.25-.704.25-1.309.175-1.433-.075-.124-.275-.199-.575-.349z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink/40 font-semibold mb-1">WhatsApp Us</h4>
                <a 
                  href="https://wa.me/919677727260" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink hover:text-gold transition-colors"
                >
                  +91 96777 27260
                </a>
                <p className="text-xs text-ink/50 font-body mt-0.5">Click to chat • Available daily</p>
              </div>
            </div>

            {/* Instagram */}
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
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 shadow-sm"
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

      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 mt-24 reveal-element">
        <div className="mb-8">
          <h2 className="font-display text-2xl text-ink">Our Atelier Location</h2>
          <p className="text-xs text-ink/50 mt-1 font-body">Find us at our flagship studio in Tirupur</p>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden border border-gold/15 shadow-soft-3d group">
          <iframe 
            title="Google Map showing JEM Atelier location in Angeripalayam, Tirupur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8696773347514!2d77.31973687570417!3d11.123018989047321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907abcf673e4b%3A0xe543e0618035b4af!2sAngeripalayam%2C%20Tiruppur%2C%20Tamil%20Nadu%20641603!5e0!3m2!1sen!2sin!4v1723624892482!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[15%] contrast-[110%] saturate-[90%] transition-transform duration-700 group-hover:scale-[1.01] relative z-0"
          />
          
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
          <div className="absolute top-6 right-8 text-[10px] tracking-widest text-gold/30 font-mono hide-xs select-none bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-ink/5 shadow-sm z-20">
            11.1218° N, 77.3242° E
          </div>
        </div>
      </section>
    </div>
  )
}
