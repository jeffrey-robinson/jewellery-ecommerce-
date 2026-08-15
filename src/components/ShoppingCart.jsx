import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Heart, Gem } from 'lucide-react'
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
      <div className="min-h-screen bg-[#FCF8F2] pt-8 pb-20 text-[#211522]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="py-20 text-center bg-white border border-[#E8D8EE] rounded-[2rem] shadow-soft">
            <ShoppingBag size={64} className="mx-auto text-[#6A3578]/25 mb-6" />
            <h1 className="text-4xl font-display font-medium text-[#211522] mb-4">Your Cart is Empty</h1>
            <p className="text-[#211522]/60 text-lg mb-8 font-body">Add some beautiful jewelry to get started!</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] rounded-full hover:opacity-95 transition-all font-semibold text-sm shadow-md"
            >
              Continue Shopping
              <ArrowRight size={18} className="text-[#D4AF65]" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FCF8F2] pt-8 pb-20 text-[#211522]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-medium text-[#211522] mb-2">Shopping Cart</h1>
          <div className="flex items-center gap-2 text-[#D4AF65] mt-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF65]" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <Gem size={16} className="animate-pulse" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF65]" />
          </div>
          <p className="text-[#211522]/60 font-body">{cartCount} item{cartCount !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] shadow-soft border border-[#E8D8EE] overflow-hidden">
              {cart.map((item, index) => (
                <div
                  key={item.product.id}
                  className={`p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center justify-between ${
                    index !== cart.length - 1 ? 'border-b border-[#E8D8EE]/60' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#FCF8F2] border border-[#E8D8EE] rounded-xl overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between self-stretch">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-lg font-semibold text-[#211522] hover:text-[#6A3578] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-[#211522]/50 text-xs font-semibold tracking-wider uppercase mt-1">
                        {item.product.category === 'bracelet' ? 'Chain Bracelet' : item.product.category}
                      </p>
                      <p className="text-[#6A3578] font-bold text-lg mt-2 font-display">
                        {formatPrice(item.product, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                          isInWishlist(item.product.id)
                            ? 'bg-[#E8D8EE] text-[#6A3578]'
                            : 'hover:bg-[#E8D8EE]/30 text-[#211522]/60 hover:text-[#6A3578]'
                        }`}
                        title={isInWishlist(item.product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart
                          size={15}
                          fill={isInWishlist(item.product.id) ? 'currentColor' : 'none'}
                        />
                        <span>Wishlist</span>
                      </button>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                      >
                        <Trash2 size={15} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between self-stretch sm:self-auto w-full sm:w-auto mt-2 sm:mt-0">
                    <div className="flex items-center gap-1 bg-[#FCF8F2] border border-[#E8D8EE] rounded-full p-1 shadow-sm">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-white rounded-full transition-colors text-[#211522]/60 hover:text-[#211522]"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="w-8 text-center font-semibold text-[#211522]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-white rounded-full transition-colors text-[#211522]/60 hover:text-[#211522]"
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="font-bold text-[#6A3578] font-display text-lg sm:mt-4">
                      {formatAmount(item.product.price * item.quantity, item.product.currency)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#211522] border border-[#D4AF65]/55 rounded-full hover:bg-[#E8D8EE]/30 transition-all font-semibold shadow-sm text-sm"
              >
                <ArrowRight size={18} className="transform rotate-180 text-[#D4AF65]" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-soft border border-[#E8D8EE] p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#211522] mb-6 font-display border-b border-[#E8D8EE]/60 pb-3">Order Summary</h2>

              {/* Price Breakdown */}
              <div className="space-y-4.5 mb-6">
                <div className="flex justify-between text-[#211522]/70 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#211522]">{formatAmount(subtotal, summaryCurrency)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#6A3578] font-semibold text-sm">
                    <span>Discount (10%)</span>
                    <span>-{formatAmount(discount, summaryCurrency)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#211522]/70 text-sm">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-[#211522]">{formatAmount(tax, summaryCurrency)}</span>
                </div>

                <div className="border-t border-[#E8D8EE] pt-4 flex justify-between text-lg font-bold text-[#211522]">
                  <span>Total</span>
                  <span className="text-[#6A3578] font-display">{formatAmount(total, summaryCurrency)}</span>
                </div>
              </div>

              {/* Coupon Input */}
              <div className="mb-6 pb-6 border-b border-[#E8D8EE]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#211522]/50 mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-1 px-3.5 py-2 border border-[#E8D8EE] rounded-xl focus:outline-none focus:border-[#6A3578] focus:ring-1 focus:ring-[#6A3578]/10 text-[#211522] text-sm bg-[#FCF8F2]/50"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-white text-[#211522] border border-[#D4AF65]/55 rounded-xl hover:bg-[#E8D8EE]/30 transition-all font-semibold text-sm whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
                <p className={`mt-2 text-xs font-body ${couponMessage.includes('not valid') ? 'text-[#6A3578] font-medium' : 'text-[#211522]/60'}`}>{couponMessage || 'Try code: SAVE10'}</p>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 mb-3 shadow-md">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full py-2.5 border border-[#6A3578] text-[#6A3578] rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#E8D8EE]/30 transition-all duration-300"
              >
                Clear Cart
              </button>

              {/* Additional Info */}
              <div className="mt-6 space-y-3.5 text-xs text-[#211522]/60 font-body">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF65] text-sm leading-none font-bold">✓</span>
                  <span>Free shipping on orders over ₹1,000</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF65] text-sm leading-none font-bold">✓</span>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#D4AF65] text-sm leading-none font-bold">✓</span>
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
