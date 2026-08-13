/** Format a product price while preserving the currency stored with that product. */
export function formatPrice(product, options = {}) {
  const { minimumFractionDigits = 0, maximumFractionDigits = 0 } = options
  const currency = product?.currency || '₹'
  const value = Number(product?.price || 0)

  return `${currency}${value.toLocaleString('en-IN', {
    minimumFractionDigits,
    maximumFractionDigits,
  })}`
}

export function formatAmount(amount, currency = '₹') {
  return `${currency}${Number(amount || 0).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}
