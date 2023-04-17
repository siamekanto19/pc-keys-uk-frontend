import { graphql } from '../generated'

export const PRODUCT_SLUGS = graphql(`
  query Products {
    products {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`)

export const SINGLE_PRODUCT = graphql(`
  query FindProduct($modelName: String, $slug: String, $publicationState: String) {
    findSlug(modelName: $modelName, slug: $slug, publicationState: $publicationState) {
      ... on ProductEntityResponse {
        data {
          id
          attributes {
            name
            slug
            sku
            in_stock
            featured_image {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                  createdAt
                  updatedAt
                }
              }
            }
            long_description
            seo {
              id
              metaTitle
              metaDescription
              metaImage {
                data {
                  id
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                  }
                }
              }
              metaSocial {
                id
                socialNetwork
                title
                description
                image {
                  data {
                    id
                    attributes {
                      name
                      alternativeText
                      caption
                      width
                      height
                      formats
                      hash
                      ext
                      mime
                      size
                      url
                      previewUrl
                      provider
                      provider_metadata
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
              keywords
              metaRobots
              structuredData
              metaViewport
              canonicalURL
            }
            product_variants(pagination: { pageSize: 100 }) {
              data {
                id
                attributes {
                  slug
                  sku
                  price
                  name
                  in_stock
                  current_price
                }
              }
            }
          }
        }
      }
    }
  }
`)
