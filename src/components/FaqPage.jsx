import { useState, useEffect } from 'react'
import { Plus, Minus, HelpCircle, Mail, Phone, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'How can I place an order?',
    answer: 'To place an order, select your desired piece from our Collections, choose the appropriate size or precious metal specifications on the Product Details page, and click "Buy Now" or "Add to Cart". Follow the secure checkout prompts to input shipping details and complete your payment.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is dispatched, you will receive a secure email containing a tracking link and a signature-verified shipment number. Standard orders dispatch in 24-48 hours, while custom collections (such as the Wedding Collection) take 4-5 weeks to complete before dispatch.'
  },
  {
    question: 'What payment methods are available?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and interest-free luxury financing options via Affirm or Klarna for eligible bridal purchases.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Complimentary fully-insured standard transit takes 3-5 business days across the domestic United States. Express overnight shipping is available at checkout. Custom made pieces take 4-5 weeks for detailed handcrafting before shipping.'
  },
  {
    question: 'Do you offer returns?',
    answer: 'Yes, we offer a 30-day hassle-free return and exchange policy for all standard pieces in unworn condition. Please note that customized orders with custom engravings or bespoke sizes (like the Wedding Collection) are final sale but covered by our lifetime resizing warranty.'
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Orders can be cancelled within 12 hours of placement. Since our craftsmen begin casting gold and selecting stones shortly after verification, cancellations requested after 12 hours may incur a small restructuring fee.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact JEM concierge support directly by emailing concierge@jem-jewellery.com, calling +1 (800) 456-JEWEL, or sending an inquiry through the Contact Us page on our website. We are available Monday to Friday from 9am to 6pm EST.'
  },
  {
    question: 'Are your jewellery products authentic?',
    answer: 'Absolutely. Every piece of JEM jewellery is cast in solid gold (14kt, 18kt, or 22kt depending on selection) and comes with an individually numbered Certificate of Authenticity. All starlight and solitaire diamonds are hand-cut and certified.'
  },
  {
    question: 'Do you provide jewellery care instructions?',
    answer: 'Yes, JEM jewellery is designed for everyday light, but proper care preserves its brilliance. Avoid exposing gold and diamonds to harsh household chemicals, remove pieces before heavy exercise, and clean with warm soapy water and a soft-bristled brush. A specialized micro-fiber cloth is included in every display box.'
  },
  {
    question: 'Do you offer gift packaging?',
    answer: 'Every JEM purchase arrives in our signature premium leather-lined keepsake display box, wrapped in soft-touch protective paper and tied with a gold-embossed ribbon. You can add a customized calligraphy note at checkout free of charge.'
  }
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-ivory min-h-screen text-ink pb-24">
      {/* FAQ Hero */}
      <section className="bg-ink text-ivory py-20 relative overflow-hidden reveal-element">
        <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="pointer-events-none absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-drift-slow" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3 inline-block">
            Support Center
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Frequently Asked
          </h1>
          <p className="mt-4 text-sm text-ivory/65 max-w-lg mx-auto font-body leading-relaxed">
            Find answers to commonly asked questions regarding custom ordering, insured shipping, diamond certificates, and jewellery care.
          </p>
        </div>
      </section>

      {/* Main Accordion Section */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 mt-16 lg:mt-24 reveal-element">
        <div className="border-b border-ink/10 pb-6 mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl text-ink">General Questions</h2>
          <span className="text-xs uppercase tracking-wider text-ink/40 font-semibold flex items-center gap-1.5">
            <HelpCircle size={13} /> {faqs.length} Answers
          </span>
        </div>

        {/* The Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-gold/40 shadow-soft-3d ring-1 ring-gold/10' 
                    : 'border-ink/5 hover:border-ink/15 shadow-sm hover:shadow-soft-3d'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg text-ink pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`h-7 w-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'border-[#E57347] text-[#E57347] bg-[#E57347]/5' : 'border-ink/10 text-ink/65 hover:border-[#E57347]'
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 border-t border-ink/5' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 sm:p-6 text-xs sm:text-sm text-ink/75 leading-relaxed font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 mt-16 reveal-element">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ink/5 shadow-soft-3d text-center flex flex-col items-center">
          <h3 className="font-display text-xl mb-2">Still have questions?</h3>
          <p className="text-xs text-ink/50 max-w-sm font-body leading-relaxed mb-6">
            If you cannot find the answer to your specific query, please contact our concierge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="mailto:concierge@jem-jewellery.com" 
              className="px-5 py-3 rounded-full border border-[#E57347]/30 hover:border-[#E57347] hover:text-[#E57347] text-[#E57347] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 font-body"
            >
              <Mail size={13} /> Email Concierge
            </a>
            <a 
              href="/contact" 
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#FF7A45] to-[#E57347] text-white text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 font-body hover:opacity-95 shadow-sm"
            >
              Contact Atelier <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
