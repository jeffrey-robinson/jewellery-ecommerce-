import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, Heart, Gem } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleMoveToCart = (product) => {
    addToCart(product, 1)
    removeFromWishlist(product.id)
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#FCF8F2] pt-8 pb-20 text-[#211522]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="py-20 text-center bg-white border border-[#E8D8EE] rounded-[2rem] shadow-soft">
            <Heart size={64} className="mx-auto text-[#6A3578]/20 mb-6 animate-pulse" />
            <h1 className="text-4xl font-display font-medium text-[#211522] mb-4">Your Wishlist is Empty</h1>
            <p className="text-[#211522]/60 text-lg mb-8 font-body">Add your favorite jewelry items to your wishlist!</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6A3578] text-white hover:bg-[#3B183F] border border-[#D4AF65]/35 hover:border-[#D4AF65] rounded-full hover:opacity-95 transition-colors font-semibold shadow-md text-sm"
            >
              Explore Collections
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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-display font-medium text-[#211522] mb-2">My Wishlist</h1>
            <div className="flex items-center gap-2 text-[#D4AF65] mt-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF65]" />
              <Gem size={16} className="animate-pulse" />
              <Gem size={16} className="animate-pulse" />
              <Gem size={16} className="animate-pulse" />
              <Gem size={16} className="animate-pulse" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF65]" />
            </div>
            <p className="text-[#211522]/60 font-body">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-5 py-2.5 border border-[#6A3578] text-[#6A3578] hover:bg-[#E8D8EE]/30 rounded-full transition-colors font-semibold w-full sm:w-auto text-sm uppercase tracking-wider"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] shadow-soft border border-[#E8D8EE] hover:border-[#D4AF65]/40 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col premium-3d-card"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-[#FCF8F2] overflow-hidden premium-3d-deep border-b border-[#E8D8EE]/40">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Product Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#E8D8EE] text-[#6A3578] shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Remove Button (Hover) */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  title="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between premium-3d-inner">
                <div>
                  <Link
                    to={`/product/${product.id}`}
                    className="font-display font-medium text-lg text-[#211522] hover:text-[#6A3578] transition-colors mb-1.5 line-clamp-2"
                  >
                    {product.name}
                  </Link>
                  <p className="text-[#6A3578]/70 text-xs font-bold uppercase tracking-wider mt-1">{product.category}</p>
                </div>

                <div className="mt-4">
                  {/* Price Section */}
                  <div className="mb-5 border-t border-[#E8D8EE]/60 pt-3.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#6A3578] font-display">
                        {product.currency}
                        {product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-[#211522]/40 line-through">
                          {product.currency}
                          {product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 py-3 bg-[#6A3578] text-white border border-[#D4AF65]/35 hover:border-[#D4AF65] rounded-full font-semibold hover:bg-[#3B183F] transition-all flex items-center justify-center gap-2 group/btn shadow-sm text-xs uppercase tracking-widest"
                    >
                      <ShoppingBag size={14} />
                      <span>Move to Cart</span>
                    </button>

                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="px-4 py-3 border border-[#E8D8EE] text-[#211522]/60 hover:text-red-500 hover:border-red-500 rounded-full transition-colors bg-white shadow-sm"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-[2rem] border border-[#E8D8EE] p-8 shadow-soft text-center sm:text-left">
          <h2 className="text-2xl font-display font-semibold text-[#211522] mb-4">Continue Shopping</h2>
          <p className="text-[#211522]/60 mb-6 font-body">Explore more beautiful collections and find your next favorite piece.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/collections/wedding"
              className="px-4 py-3.5 bg-[#FCF8F2] text-[#211522]/85 hover:bg-[#6A3578] hover:text-white rounded-xl border border-[#E8D8EE] transition-all font-semibold text-center text-sm shadow-sm"
            >
              Wedding Collection
            </Link>
            <Link
              to="/collections/necklace"
              className="px-4 py-3.5 bg-[#FCF8F2] text-[#211522]/85 hover:bg-[#6A3578] hover:text-white rounded-xl border border-[#E8D8EE] transition-all font-semibold text-center text-sm shadow-sm"
            >
              Necklaces
            </Link>
            <Link
              to="/collections/kada"
              className="px-4 py-3.5 bg-[#FCF8F2] text-[#211522]/85 hover:bg-[#6A3578] hover:text-white rounded-xl border border-[#E8D8EE] transition-all font-semibold text-center text-sm shadow-sm"
            >
              Kadas
            </Link>
            <Link
              to="/collections/bracelet"
              className="px-4 py-3.5 bg-[#FCF8F2] text-[#211522]/85 hover:bg-[#6A3578] hover:text-white rounded-xl border border-[#E8D8EE] transition-all font-semibold text-center text-sm shadow-sm"
            >
              Bracelets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
