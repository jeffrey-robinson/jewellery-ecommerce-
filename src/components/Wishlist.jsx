import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, Heart } from 'lucide-react'
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
      <div className="min-h-screen bg-gradient-to-b from-ivory to-white pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <Heart size={64} className="mx-auto text-ink/20 mb-6" />
            <h1 className="text-4xl font-bold text-ink mb-4">Your Wishlist is Empty</h1>
            <p className="text-ink/60 text-lg mb-8">Add your favorite jewelry items to your wishlist!</p>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF7A45] to-[#E57347] text-white rounded-lg hover:opacity-95 transition-colors font-semibold"
            >
              Explore Collections
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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-ink mb-2">My Wishlist</h1>
            <p className="text-ink/60">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-4 py-2 border border-[#E57347] text-[#E57347] rounded-lg hover:bg-[#E57347]/5 transition-colors font-semibold w-full sm:w-auto"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm border border-ink/5 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-ivory overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Product Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      product.tag === 'Bestseller'
                        ? 'bg-ruby'
                        : product.tag === 'New'
                        ? 'bg-emerald'
                        : 'bg-gold'
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Price Badge */}
                {product.oldPrice && (
                  <div className="absolute top-3 right-3 bg-ruby text-white px-2 py-1 rounded-lg text-xs font-bold">
                    Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}

                {/* Remove Button (Hover) */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-ruby hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  title="Remove from wishlist"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col">
                <Link
                  to={`/product/${product.id}`}
                  className="font-semibold text-ink text-lg hover:text-gold transition-colors mb-1 line-clamp-2"
                >
                  {product.name}
                </Link>

                <p className="text-ink/60 text-sm mb-3">{product.category}</p>

                {/* Price Section */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gold">
                      {product.currency}
                      {product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-ink/40 line-through">
                        {product.currency}
                        {product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#FF7A45] to-[#E57347] text-white rounded-lg font-semibold hover:opacity-95 transition-colors flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <ShoppingBag size={18} />
                    <span>Move to Cart</span>
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-4 py-2.5 border border-ink/10 text-ink rounded-lg hover:border-ruby hover:text-ruby transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ink/5 p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Continue Shopping</h2>
          <p className="text-ink/60 mb-6">Explore more beautiful collections and find your next favorite piece.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/collections"
              className="px-4 py-3 bg-ivory text-ink rounded-lg hover:bg-[#E57347] hover:text-white transition-colors font-semibold text-center"
            >
              Wedding Collection
            </Link>
            <Link
              to="/collections/necklace"
              className="px-4 py-3 bg-ivory text-ink rounded-lg hover:bg-[#E57347] hover:text-white transition-colors font-semibold text-center"
            >
              Necklaces
            </Link>
            <Link
              to="/collections/kada"
              className="px-4 py-3 bg-ivory text-ink rounded-lg hover:bg-[#E57347] hover:text-white transition-colors font-semibold text-center"
            >
              Kadas
            </Link>
            <Link
              to="/collections/bracelet"
              className="px-4 py-3 bg-ivory text-ink rounded-lg hover:bg-[#E57347] hover:text-white transition-colors font-semibold text-center"
            >
              Bracelets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
