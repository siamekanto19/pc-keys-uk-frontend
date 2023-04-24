import { graphql } from '../generated'

export const COLLECTION_SLUGS = graphql(`
  query CollectionSlugs {
    collections {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`)

export const SINGLE_COLLECTION = graphql(`
  query SingleCollection($modelName: String, $slug: String, $publicationState: String) {
    findSlug(modelName: $modelName, slug: $slug, publicationState: $publicationState) {
      ... on CollectionEntityResponse {
        data {
          id
          attributes {
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
            name
            feature_image {
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
            slug
            description
          }
        }
      }
    }
  }
`)
