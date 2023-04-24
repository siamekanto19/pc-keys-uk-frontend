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

export const PRODUCTS_BY_CATEGORY = graphql(`
  query ProductsByCategory($filters: ProductFiltersInput, $sort: [String], $pagination: PaginationArg) {
    products(filters: $filters, sort: $sort, pagination: $pagination) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          slug
          sku
          name
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
          in_stock
          product_variants {
            data {
              id
              attributes {
                price
                sku
                slug
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
`)
