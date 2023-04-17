import { AddressInput } from '@/gql/generated/graphql'
import { persistedProxy } from '@/lib/PersistedProxy'

type CheckoutProxy = {
  shippingAddress: Partial<AddressInput>
}

export const checkoutStore = persistedProxy<CheckoutProxy>('checkoutStore', {
  shippingAddress: {},
})

export const setShippingAddress = async (data: Partial<AddressInput>) => (checkoutStore.shippingAddress = data)
