import { createContext, useState, useEffect, useContext } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('jem_wishlist')
      const parsed = saved ? JSON.parse(saved) : []
      return Array.isArray(parsed) ? parsed.filter((item) => item?.id) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('jem_wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!product?.id) return prev
      const exists = prev.find((item) => String(item.id) === String(product.id))
      if (exists) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => String(item.id) !== String(productId)))
  }

  const isInWishlist = (productId) => {
    return wishlist.some((item) => String(item.id) === String(productId))
  }

  const clearWishlist = () => {
    setWishlist([])
  }

  const wishlistCount = wishlist.length

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
