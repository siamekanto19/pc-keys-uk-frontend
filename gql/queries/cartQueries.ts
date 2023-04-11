import { graphql } from '../generated'

export const ADD_ITEM_TO_ORDER = graphql(`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        lines {
          createdAt
          id
          productVariant {
            sku
            name
            price
            id
            product {
              name
              slug
              featuredAsset {
                source
                type
                id
                name
              }
            }
          }
          unitPrice
          quantity
          linePrice
        }
        total
        subTotal
      }
    }
  }
`)

export const REMOVE_FROM_ORDER = graphql(`
  mutation RemoveOrderLine($orderLineId: ID!) {
    removeOrderLine(orderLineId: $orderLineId) {
      ... on Order {
        lines {
          createdAt
          id
          productVariant {
            sku
            name
            price
            id
            product {
              name
              slug
              featuredAsset {
                source
                type
                id
                name
              }
            }
          }
          unitPrice
          quantity
          linePrice
        }
        total
        subTotal
      }
    }
  }
`)
