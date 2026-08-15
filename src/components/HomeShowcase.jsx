import { useEffect } from 'react'
import Hero from './Hero.jsx'
import Brands from './Brands.jsx'
import Categories from './Categories.jsx'
import Products from './Products.jsx'
import Reviews from './Reviews.jsx'

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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-element')
      elements.forEach((el) => observer.observe(el))
    }, 200)

    return () => {
      clearTimeout(timer)
      const elements = document.querySelectorAll('.reveal-element')
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="bg-[#FCF8F2] min-h-screen w-full overflow-hidden">
      
      {/* 1. Large Hero Section */}
      <div className="reveal-element">
        <Hero />
      </div>

      {/* 2. Brand Statistics & Trusted Logos */}
      <div className="reveal-element">
        <Brands />
      </div>

      {/* 3. Editorial Collections Section */}
      <div className="reveal-element">
        <Categories />
      </div>

      {/* 4. Product Presentation Showcase */}
      <div className="reveal-element">
        <Products />
      </div>

      {/* 5. Client Testimonials Section */}
      <div className="reveal-element">
        <Reviews />
      </div>

    </div>
  )
}
