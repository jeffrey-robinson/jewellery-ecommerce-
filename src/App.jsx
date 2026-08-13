import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomeShowcase from './components/HomeShowcase.jsx'
import Footer from './components/Footer.jsx'
import WeddingCollection from './components/WeddingCollection.jsx'
import ProductCatalog from './components/ProductCatalog.jsx'
import NecklaceCollection from './components/NecklaceCollection.jsx'
import KadaCollection from './components/KadaCollection.jsx'
import BraceletCollection from './components/BraceletCollection.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import ContactUs from './components/ContactUs.jsx'
import CustomerReviews from './components/CustomerReviews.jsx'
import FaqPage from './components/FaqPage.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'
import Wishlist from './components/Wishlist.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext.jsx'
import AdminLayout from './components/admin/AdminLayout.jsx'
import AdminLogin from './components/admin/AdminLogin.jsx'
import { AdminCustomers, AdminOrders, AdminProducts, AdminReviews, Dashboard } from './components/admin/AdminPages.jsx'

function Home() {
  return <HomeShowcase />
}

function StoreLayout() {
  return <div className="min-h-screen bg-ivory"><Navbar /><main><Outlet /></main><Footer /></div>
}

function ProtectedAdminRoute() {
  const { isAdmin } = useAdminAuth()
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export default function App() {
  return (
    <AdminAuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route element={<StoreLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<ProductCatalog />} />
              <Route path="/collections/wedding" element={<WeddingCollection />} />
              <Route path="/collections/necklace" element={<NecklaceCollection />} />
              <Route path="/collections/kada" element={<KadaCollection />} />
              <Route path="/collections/bracelet" element={<BraceletCollection />} />
              <Route path="/collections/chain-bracelet" element={<BraceletCollection />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/reviews" element={<CustomerReviews />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedAdminRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="reviews" element={<AdminReviews />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </AdminAuthProvider>
  )
}
