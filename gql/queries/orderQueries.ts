import { graphql } from '../generated'

export const CREATE_ORDER = graphql(`
  mutation CreateOrder($data: OrderInput!) {
    createOrder(data: $data) {
      data {
        id
        attributes {
          payment_intent
          payment_method
          total_price
          user {
            data {
              id
              attributes {
                email
                username
              }
            }
          }
          email
          first_name
          last_name
          customer_type
          order_details
          shipping_info
          status
          transaction_id
        }
      }
    }
  }
`)
