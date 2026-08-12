import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import OfferBanner from './components/OfferBanner.jsx'
import Reviews from './components/Reviews.jsx'
import Brands from './components/Brands.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <OfferBanner />
        <Reviews />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
