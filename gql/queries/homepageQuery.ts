import { graphql } from '../generated'

export const HOME_PAGE = graphql(`
  query Homepage {
    homepage {
      data {
        id
        attributes {
          title
          hero {
            title
            id
            content
          }
          collection_tabs {
            title
            content
            id
            collections {
              data {
                id
                attributes {
                  slug
                  name
                  products(filters: { is_featured: { eq: true } }) {
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
                        product_variants {
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
            }
          }
          body {
            ... on ComponentHomeFeaturedCollections {
              __typename
              title
              id
              content
              cards {
                title
                subtext
                id
                button_text
                button_href
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
            }
            ... on ComponentHomeProductsFromCollection {
              __typename
              title
              id
              content
              collection {
                data {
                  id
                  attributes {
                    name
                    slug
                    products {
                      data {
                        id
                        attributes {
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
                          slug
                          sku
                          product_variants {
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
              }
            }
          }
        }
      }
    }
  }
`)
