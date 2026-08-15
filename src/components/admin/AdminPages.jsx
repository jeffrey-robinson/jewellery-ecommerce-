import { Package, ShoppingBag, Star, Users } from 'lucide-react'
import { catalogProducts, reviews } from '../../data/content.js'
import { formatPrice } from '../../utils/currency.js'

const orders = [
  { id: 'JEM-1048', customer: 'Amara Whitfield', total: '₹329.00', status: 'Processing' }, 
  { id: 'JEM-1047', customer: 'Priya Nandakumar', total: '₹1,850.00', status: 'Shipped' }, 
  { id: 'JEM-1046', customer: 'Sofia Marchetti', total: '₹279.00', status: 'Delivered' }
]

const customers = [
  { name: 'Amara Whitfield', email: 'amara@example.com', orders: 4, spend: '₹1,240' }, 
  { name: 'Priya Nandakumar', email: 'priya@example.com', orders: 3, spend: '₹2,105' }, 
  { name: 'Sofia Marchetti', email: 'sofia@example.com', orders: 2, spend: '₹558' }
]

function Title({ children, description }) { 
  return (
    <div className="mb-7">
      <h1 className="font-display text-3xl text-[#211522] font-semibold">{children}</h1>
      <p className="mt-1 text-sm text-[#211522]/55 font-body">{description}</p>
    </div>
  ) 
}

function Table({ headings, children }) { 
  return (
    <div className="overflow-x-auto rounded-[2rem] border border-[#E8D8EE] bg-white shadow-soft">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="border-b border-[#E8D8EE] bg-[#FCF8F2] text-xs uppercase tracking-wider text-[#211522]/60">
          <tr>
            {headings.map((heading) => (
              <th key={heading} className="px-6 py-4.5 font-bold">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8D8EE]/60">{children}</tbody>
      </table>
    </div>
  ) 
}

export function Dashboard() { 
  const cards = [
    ['Revenue', '₹12,480', ShoppingBag], 
    ['Orders', '38', Package], 
    ['Customers', '246', Users], 
    ['Reviews', '4.8 / 5', Star]
  ]
  return (
    <>
      <Title description="A live overview of your jewellery business.">Dashboard</Title>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value, Icon]) => (
          <div key={label} className="rounded-[2rem] border border-[#E8D8EE] bg-white p-6 shadow-soft hover:border-[#D4AF65]/35 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-[#211522]/50">{label}</p>
              <Icon size={18} className="text-[#6A3578]" />
            </div>
            <p className="mt-5 font-display text-3xl text-[#211522] font-bold">{value}</p>
            <p className="mt-2 text-xs text-[#6A3578] font-semibold font-body">+12.5% this month</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Title description="Most recent purchases.">Recent orders</Title>
        <OrdersTable />
      </div>
    </>
  ) 
}

function OrdersTable() { 
  return (
    <Table headings={['Order', 'Customer', 'Total', 'Status']}>
      {orders.map((order) => (
        <tr key={order.id} className="hover:bg-[#FCF8F2]/30 transition-colors">
          <td className="px-6 py-4 font-semibold text-[#211522]">{order.id}</td>
          <td className="px-6 py-4 text-[#211522]/70 font-body">{order.customer}</td>
          <td className="px-6 py-4 font-display font-medium text-[#6A3578]">{order.total}</td>
          <td className="px-6 py-4">
            <span className="rounded-full bg-[#E8D8EE] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#6A3578]">
              {order.status}
            </span>
          </td>
        </tr>
      ))}
    </Table>
  ) 
}

export function AdminProducts() { 
  return (
    <>
      <Title description={`${catalogProducts.length} products in your catalogue.`}>Products</Title>
      <Table headings={['Product', 'Category', 'Price', 'Status']}>
        {catalogProducts.map((product) => (
          <tr key={product.id} className="hover:bg-[#FCF8F2]/30 transition-colors">
            <td className="px-6 py-3.5">
              <div className="flex items-center gap-3">
                <img src={product.images[0]} alt="" className="h-10 w-10 rounded-xl object-cover border border-[#E8D8EE]" />
                <span className="font-semibold text-[#211522]">{product.name}</span>
              </div>
            </td>
            <td className="px-6 py-3.5 text-[#211522]/70 font-body">{product.category}</td>
            <td className="px-6 py-3.5 font-display font-semibold text-[#6A3578]">{formatPrice(product)}</td>
            <td className="px-6 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6A3578]">Active</span>
            </td>
          </tr>
        ))}
      </Table>
    </>
  ) 
}

export function AdminOrders() { 
  return (
    <>
      <Title description="Review and fulfil current customer orders.">Orders</Title>
      <OrdersTable />
    </>
  ) 
}

export function AdminCustomers() { 
  return (
    <>
      <Title description="Your most recent customer records.">Customers</Title>
      <Table headings={['Customer', 'Orders', 'Lifetime spend']}>
        {customers.map((customer) => (
          <tr key={customer.email} className="hover:bg-[#FCF8F2]/30 transition-colors">
            <td className="px-6 py-4">
              <p className="font-semibold text-[#211522]">{customer.name}</p>
              <p className="text-xs text-[#211522]/50 font-body mt-0.5">{customer.email}</p>
            </td>
            <td className="px-6 py-4 text-[#211522]/80 font-body">{customer.orders}</td>
            <td className="px-6 py-4 font-display font-semibold text-[#6A3578]">{customer.spend}</td>
          </tr>
        ))}
      </Table>
    </>
  ) 
}

export function AdminReviews() { 
  return (
    <>
      <Title description="Recent customer feedback from your storefront.">Reviews</Title>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-[2rem] border border-[#E8D8EE] bg-white p-6 shadow-soft hover:border-[#D4AF65]/35 transition-colors duration-300">
            <div className="flex items-center gap-3.5">
              <img src={review.img} alt="" className="h-11 w-11 rounded-full object-cover border border-[#E8D8EE]" />
              <div>
                <p className="font-semibold text-[#211522]">{review.name}</p>
                <p className="text-xs text-[#D4AF65] tracking-wider mt-0.5">{'★'.repeat(review.rating)}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#211522]/75 font-body italic">“{review.text}”</p>
          </article>
        ))}
      </div>
    </>
  ) 
}
