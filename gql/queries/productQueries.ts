import { graphql } from '../generated'

export const PRODUCT_SLUGS = graphql(`
  query Products {
    products {
      items {
        slug
        id
      }
    }
  }
`)

export const SINGLE_PRODUCT = graphql(`
  query Product($slug: String) {
    product(slug: $slug) {
      id
      name
      slug
      createdAt
      customFields {
        isFeatured
        metaDescription
        metaKeywords
        metaTitle
        newUntil
        oldPrice
        shortDescription
        weight
        relatedProducts {
          name
          slug
          id
          featuredAsset {
            id
            source
            mimeType
            name
          }
        }
      }
      featuredAsset {
        id
        source
        mimeType
        name
      }
      description
      variants {
        price
        sku
        name
        id
      }
    }
  }
`)
