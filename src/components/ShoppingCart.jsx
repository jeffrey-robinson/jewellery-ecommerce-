import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatAmount, formatPrice } from '../utils/currency.js'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function ShoppingCart() {
  const { cart, cartCount, updateQuantity, removeFromCart, clearCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [couponInput, setCouponInput] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState('')
  const [couponMessage, setCouponMessage] = useState('')

  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const summaryCurrency = cart[0]?.product?.currency || '₹'
  const discount = appliedCoupon === 'SAVE10' ? subtotal * 0.1 : 0
  const tax = (subtotal - discount) * 0.1 // 10% tax
  const total = subtotal - discount + tax

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity)
    }
  }

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleApplyCoupon = () => {
    if (couponInput.trim() === 'SAVE10') {
      setAppliedCoupon('SAVE10')
      setCouponMessage('SAVE10 applied — 10% discount added.')
    } else {
      setAppliedCoupon('')
      setCouponMessage('That coupon code is not valid.')
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ivory to-white pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-ink/20 mb-6" />
            <h1 className="text-4xl font-bold text-ink mb-4">Your Cart is Empty</h1>
            <p className="text-ink/60 text-lg mb-8">Add some beautiful jewelry to get started!</p>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors font-semibold"
            >
              Continue Shopping
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-white pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-ink mb-2">Shopping Cart</h1>
          <p className="text-ink/60">{cartCount} item{cartCount !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-ink/5 overflow-hidden">
              {cart.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`p-4 sm:p-6 flex gap-4 sm:gap-6 ${
                    index !== cart.length - 1 ? 'border-b border-ink/5' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-ivory rounded-lg overflow-hidden">
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-lg font-semibold text-ink hover:text-gold transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-ink/60 text-sm mt-1">{item.product.category}</p>
                      <p className="text-gold font-bold text-lg mt-2">
                        {formatPrice(item.product, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg hover:bg-emerald/10 text-emerald transition-colors"
                        title={isInWishlist(item.product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart
                          size={16}
                          className={isInWishlist(item.product.id) ? 'fill-emerald' : ''}
                        />
                        <span className="hidden sm:inline">Wishlist</span>
                      </button>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg hover:bg-ruby/10 text-ruby transition-colors ml-auto"
                      >
                        <Trash2 size={16} />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col items-end justify-between">
                    <div className="flex items-center gap-1 bg-ivory rounded-lg p-1">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-colors text-ink/60 hover:text-ink"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold text-ink">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-colors text-ink/60 hover:text-ink"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="font-bold text-ink text-lg mt-4">
                      {formatAmount(item.product.price * item.quantity, item.product.currency)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ivory text-gold border border-gold rounded-lg hover:bg-gold/10 transition-colors font-semibold"
              >
                <ArrowRight size={20} className="transform rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-ink/5 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-ink mb-6">Order Summary</h2>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-ink/70">
                  <span>Subtotal</span>
                  <span>{formatAmount(subtotal, summaryCurrency)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald font-semibold">
                    <span>Discount (10%)</span>
                    <span>-{formatAmount(discount, summaryCurrency)}</span>
                  </div>
                )}

                <div className="flex justify-between text-ink/70">
                  <span>Estimated Tax</span>
                  <span>{formatAmount(tax, summaryCurrency)}</span>
                </div>

                <div className="border-t border-ink/10 pt-3 flex justify-between text-lg font-bold text-ink">
                  <span>Total</span>
                  <span className="text-gold">{formatAmount(total, summaryCurrency)}</span>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="mb-6 pb-6 border-b border-ink/10">
                <label className="block text-sm font-semibold text-ink mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-ink/10 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-ink text-sm"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-3 py-2 bg-ivory text-gold rounded-lg hover:bg-gold/10 transition-colors font-semibold text-sm whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
                <p className={`mt-2 text-xs ${couponMessage.includes('not valid') ? 'text-ruby' : 'text-ink/60'}`}>{couponMessage || 'Try code: SAVE10'}</p>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-3 bg-gradient-to-r from-gold to-gold/80 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 mb-3">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full py-2 border border-ruby text-ruby rounded-lg font-semibold hover:bg-ruby/5 transition-colors"
              >
                Clear Cart
              </button>

              {/* Additional Info */}
              <div className="mt-6 space-y-3 text-sm text-ink/60">
                <div className="flex items-start gap-2">
                  <span className="text-gold text-lg leading-tight">✓</span>
                  <span>Free shipping on orders over ₹1,000</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold text-lg leading-tight">✓</span>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold text-lg leading-tight">✓</span>
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
