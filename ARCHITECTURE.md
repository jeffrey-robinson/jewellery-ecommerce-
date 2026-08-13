# Architecture & Data Flow Diagram

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser / Frontend                       │
└─────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
         ┌──────▼──────┐         ┌──────▼──────┐
         │ CartContext │         │WishlistContext
         └──────┬──────┘         └──────┬──────┘
                │                       │
         ┌──────▼──────┐         ┌──────▼──────┐
         │  Cart Data  │         │ Wishlist    │
         │(localStorage)         │ (localStorage)
         └─────────────┘         └─────────────┘
```

## 🔄 Data Flow Diagram

### Adding to Cart Flow
```
User Action: Click "Add to Cart"
        │
        ▼
┌───────────────────────┐
│ ShoppingCart Component│
│ ProductDetails      │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  useCart() Hook       │
│  addToCart()          │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  CartContext          │
│  Update State         │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  localStorage         │
│  Save 'jem_cart'      │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  Navbar Update        │
│  Badge Count ++       │
└───────────────────────┘
```

### Adding to Wishlist Flow
```
User Action: Click Heart Icon
        │
        ▼
┌───────────────────────┐
│ ProductDetails        │
│ Wishlist Component    │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  useWishlist() Hook   │
│  addToWishlist()      │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  WishlistContext      │
│  Update State         │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  localStorage         │
│  Save 'jem_wishlist'  │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│  Heart Icon Updates   │
│  Visual Feedback      │
└───────────────────────┘
```

## 📦 Component Hierarchy

```
App.jsx
├── CartProvider ────────────────┐
│   └── WishlistProvider         │
│       ├── Navbar               │
│       │   ├── Cart Badge       │
│       │   └── Wishlist Badge   │
│       │                        │
│       ├── Routes               │
│       │   ├── Home             │
│       │   ├── /cart            │
│       │   │   └── ShoppingCart │
│       │   │       ├── CartItem │
│       │   │       └── Summary  │
│       │   ├── /wishlist        │
│       │   │   └── Wishlist     │
│       │   │       └── WishItem │
│       │   ├── /product/:id     │
│       │   │   └── ProductDetails
│       │   └── [Other routes]   │
│       │                        │
│       └── Footer               │
└────────────────────────────────┘
```

## 🔌 Context API Usage

### CartContext
```
┌─────────────────────────────┐
│     CartContext             │
├─────────────────────────────┤
│ State:                      │
│  • cart (array)             │
│                             │
│ Methods:                    │
│  • addToCart()              │
│  • removeFromCart()         │
│  • updateQuantity()         │
│  • clearCart()              │
│                             │
│ Computed:                   │
│  • cartCount                │
├─────────────────────────────┤
│ Consumed by:                │
│  • ShoppingCart             │
│  • Navbar                   │
│  • ProductDetails           │
│  • Wishlist                 │
└─────────────────────────────┘
```

### WishlistContext
```
┌─────────────────────────────┐
│   WishlistContext           │
├─────────────────────────────┤
│ State:                      │
│  • wishlist (array)         │
│                             │
│ Methods:                    │
│  • addToWishlist()          │
│  • removeFromWishlist()     │
│  • isInWishlist()           │
│  • clearWishlist()          │
│                             │
│ Computed:                   │
│  • wishlistCount            │
├─────────────────────────────┤
│ Consumed by:                │
│  • Wishlist                 │
│  • Navbar                   │
│  • ShoppingCart             │
│  • ProductDetails           │
└─────────────────────────────┘
```

## 📊 State Management Flow

### Cart State Structure
```javascript
{
  cart: [
    {
      product: {
        id: '123',
        name: 'Necklace',
        price: 299,
        img: 'url...',
        category: 'Necklace',
        // ... other product data
      },
      quantity: 2
    },
    // ... more items
  ],
  cartCount: 5  // Total items (sum of quantities)
}
```

### Wishlist State Structure
```javascript
{
  wishlist: [
    {
      id: '123',
      name: 'Bracelet',
      price: 199,
      img: 'url...',
      category: 'Bracelet',
      // ... other product data
    },
    // ... more items
  ],
  wishlistCount: 3  // Total unique items
}
```

## 🛣️ Route Structure

```
/
├── / (Home)
├── /collections (All Products)
├── /collections/wedding
├── /collections/necklace
├── /collections/kada
├── /collections/bracelet
├── /product/:id (Product Details)
├── /cart ✨ NEW
├── /wishlist ✨ NEW
├── /contact (Contact Us)
├── /reviews (Reviews)
└── /faq (FAQ)
```

## 💾 localStorage Structure

```
Browser Storage
├── jem_cart: [
│   {
│     "product": { id, name, price, img, ... },
│     "quantity": 2
│   },
│   ...
│ ]
│
└── jem_wishlist: [
    {
      "id": "123",
      "name": "...",
      "price": 299,
      "img": "...",
      ...
    },
    ...
  ]
```

## 🎯 User Interaction Flows

### Flow 1: Browse and Purchase
```
1. Browse Products
   ↓
2. View Product Details
   ↓
3. Add to Cart
   ├─→ Badge Updates
   └─→ Save to localStorage
   ↓
4. Continue Shopping or Go to Cart
   ↓
5. Review Cart
   ├─→ Adjust Quantities
   ├─→ Remove Items
   └─→ Apply Coupon
   ↓
6. Checkout
```

### Flow 2: Wishlist Management
```
1. Browse Products
   ↓
2. Add to Wishlist
   ├─→ Badge Updates
   └─→ Save to localStorage
   ↓
3. Continue Browsing
   ↓
4. View Wishlist (Click Heart Badge)
   ↓
5. Manage Wishlist
   ├─→ View Items
   ├─→ Move to Cart
   ├─→ Remove Items
   └─→ Clear Wishlist
   ↓
6. Complete Purchase
```

### Flow 3: Cart Operations
```
1. View Cart (Click Bag Badge)
   ↓
2. Review Items
   ├─→ View Images & Prices
   ├─→ See Quantities
   └─→ View Totals
   ↓
3. Modify Cart
   ├─→ Adjust Quantity
   ├─→ Remove Items
   ├─→ Move to Wishlist
   └─→ Clear Cart
   ↓
4. Apply Discount
   ├─→ Enter Coupon
   ├─→ See Updated Totals
   └─→ Calculate Tax
   ↓
5. Proceed to Checkout
```

## 🔄 Synchronization

### Cart ↔ Wishlist Sync
```
When Item Added to Cart:
Cart ────────────► localStorage
  ↓
  └──► Navbar (Update Badge)

When Item Moved from Wishlist:
Wishlist ─────────► Remove from Wishlist
   ↓
   └──► Add to Cart
           ↓
           └──► Update Both Contexts
                   ↓
                   └──► Update localStorage
                          ↓
                          └──► Update Navbar Badges
```

## 📱 Responsive Behavior

```
Mobile (< 640px)
├── Single Column Layout
├── Full-Width Items
├── Stacked Components
└── Touch-Friendly Buttons
    
Tablet (640-1024px)
├── 2-Column Layout
├── Responsive Grid
├── Side Sidebar
└── Optimized Spacing
    
Desktop (> 1024px)
├── 3-Column Layout
├── Full Sidebar
├── Maximum Width
└── Enhanced Spacing
```

## 🎨 Styling Architecture

```
Tailwind CSS Classes
├── Spacing (p-, m-, gap-)
├── Colors (bg-, text-, border-)
├── Sizes (w-, h-, min-, max-)
├── Responsive (sm:, md:, lg:)
├── Effects (shadow-, rounded-, opacity-)
├── Transitions (transition-, duration-)
└── Animations (animate-)
```

## 🔐 Data Persistence Flow

```
App Loads
  │
  ├─→ Check localStorage for 'jem_cart'
  │     ├─→ Found? Load into CartContext
  │     └─→ Not found? Initialize empty
  │
  └─→ Check localStorage for 'jem_wishlist'
        ├─→ Found? Load into WishlistContext
        └─→ Not found? Initialize empty
  
When Data Changes
  │
  ├─→ Update React Context State
  │     ├─→ Trigger Component Re-renders
  │     └─→ Update UI
  │
  └─→ Save to localStorage
        └─→ Data Persists
```

## 📈 Performance Optimization

```
Optimization Strategies:
├── React Context (Avoid Prop Drilling)
├── localStorage (No API Calls)
├── Computed Values (cartCount, wishlistCount)
├── CSS Transitions (Not JS Animations)
├── Lazy Image Loading
├── Minimal Re-renders
└── Efficient Component Structure
```

## 🧮 Calculation Flow (Cart)

```
User Inputs
├── Product Price
├── Quantity
└── Coupon Code
    │
    ▼
Cart Calculation Engine
├── Subtotal = Σ(price × quantity)
├── Discount = (Coupon Applied?) ? Subtotal × 10% : 0
├── Tax = (Subtotal - Discount) × 10%
└── Total = Subtotal - Discount + Tax
    │
    ▼
Display Order Summary
├── Show Breakdown
├── Show Discount
├── Show Tax
└── Show Total
```

## 🎯 Component Communication Map

```
Navbar
  ├─→ useCart() [cartCount]
  ├─→ useWishlist() [wishlistCount]
  └─→ Navigate to /cart, /wishlist

ProductDetails
  ├─→ useCart() [addToCart]
  ├─→ useWishlist() [add/remove/check]
  └─→ Provide Action Buttons

ShoppingCart
  ├─→ useCart() [all methods]
  ├─→ useWishlist() [addToWishlist]
  └─→ Display Order Summary

Wishlist
  ├─→ useWishlist() [all methods]
  ├─→ useCart() [addToCart]
  └─→ Display Grid of Items
```

## 📚 File Dependencies

```
App.jsx
├── imports CartProvider
├── imports WishlistProvider
├── imports Navbar
├── imports ShoppingCart (new route)
├── imports Wishlist (new route)
└── imports all other components

Navbar.jsx
├── imports useCart
├── imports useWishlist
└── navigates to /cart, /wishlist

ShoppingCart.jsx
├── imports useCart
├── imports useWishlist
└── displays cart data & summary

Wishlist.jsx
├── imports useCart
├── imports useWishlist
└── displays wishlist grid

ProductDetails.jsx
├── imports useCart
├── imports useWishlist
└── provides add/remove actions

WishlistContext.jsx (NEW)
├── exports useWishlist hook
├── manages wishlist state
└── uses localStorage persistence

CartContext.jsx (existing)
├── exports useCart hook
├── manages cart state
└── uses localStorage persistence
```

---

This architecture provides:
✅ Clear data flow  
✅ Efficient state management  
✅ Easy scalability  
✅ Persistent storage  
✅ Real-time UI updates  
✅ Responsive design  
✅ Component reusability  

Perfect for a production e-commerce system! 🚀
