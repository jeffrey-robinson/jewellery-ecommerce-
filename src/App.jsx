import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import OfferBanner from './components/OfferBanner.jsx'
import Reviews from './components/Reviews.jsx'
import Brands from './components/Brands.jsx'
import Footer from './components/Footer.jsx'
import WeddingCollection from './components/WeddingCollection.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <OfferBanner />
      <Reviews />
      <Brands />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/wedding" element={<WeddingCollection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
