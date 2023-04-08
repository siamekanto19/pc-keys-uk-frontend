export function formatPrice(price?: number | null) {
  if (!price) return null
  const formattedPrice = (price / 100).toPrecision(5)
  return `£${formattedPrice}`
}
