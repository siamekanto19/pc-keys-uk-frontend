import { OrderAddress } from '@/gql/generated/graphql'
import { persistedProxy } from '@/lib/PersistedProxy'

type CheckoutProxy = {
  shippingAddress: Partial<OrderAddress>
  billingAddress: Partial<OrderAddress>
}

export const checkoutStore = persistedProxy<CheckoutProxy>('checkoutStore', {
  shippingAddress: {},
  billingAddress: {},
})

export const setShippingAddress = async (data: Partial<OrderAddress>) => (checkoutStore.shippingAddress = data)
export const setBillingAddress = async (data: Partial<OrderAddress>) => (checkoutStore.billingAddress = data)
