import { graphql } from '../generated'

export const SET_SHIPPING_ADDRESS = graphql(`
  mutation SetOrderShippingAddress($input: CreateAddressInput!) {
    setOrderShippingAddress(input: $input) {
      ... on Order {
        shippingAddress {
          city
          company
          country
          countryCode
          fullName
          phoneNumber
          postalCode
          province
          streetLine1
          streetLine2
        }
        billingAddress {
          city
          company
          country
          countryCode
          fullName
          phoneNumber
          postalCode
          province
          streetLine1
          streetLine2
        }
      }
    }
  }
`)

export const SET_BILLING_ADDRESS = graphql(`
  mutation SetOrderBillingAddress($input: CreateAddressInput!) {
    setOrderBillingAddress(input: $input) {
      ... on Order {
        shippingAddress {
          city
          company
          country
          countryCode
          fullName
          phoneNumber
          postalCode
          province
          streetLine1
          streetLine2
        }
        billingAddress {
          city
          company
          country
          countryCode
          fullName
          phoneNumber
          postalCode
          province
          streetLine1
          streetLine2
        }
      }
    }
  }
`)
