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
import Collections from './components/Collections.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import ContactUs from './components/ContactUs.jsx'
import CustomerReviews from './components/CustomerReviews.jsx'
import FaqPage from './components/FaqPage.jsx'
import { CartProvider } from './context/CartContext.jsx'

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
    <CartProvider>
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/wedding" element={<WeddingCollection />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/reviews" element={<CustomerReviews />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
