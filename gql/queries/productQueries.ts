import { graphql } from '../generated'

export const PRODUCT_SLUGS = graphql(`
  query Products {
    products {
      id
      slug
    }
  }
`)

export const PRODUCT_BY_SLUG = graphql(`
  query Product($slug: [String]) {
    product(slug: $slug) {
      enabled
      id
      title
      slug
      status
      variants {
        isAvailable
        hasUnlimitedStock
        enabled
        id
        isDefault
        maxQty
        minQty
        price
        slug
        title
        sku
      }
      ... on product_Product {
        mainImage {
          alt
          uri
          url
          id
        }
        body
        availableForPurchase
      }
    }
  }
`)
