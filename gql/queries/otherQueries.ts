import { graphql } from '../generated'

export const AVAILABLE_COUNTRIES = graphql(`
  query AvailableCountries {
    availableCountries {
      code
      name
    }
  }
`)

export const STRIPE_PAYMENT_INTENT = graphql(`
  mutation StripePaymentIntent {
    createStripePaymentIntent
  }
`)
