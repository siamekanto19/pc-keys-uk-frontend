import { MutationAddItemToOrderArgs, MutationRemoveOrderLineArgs, OrderLine } from '@/gql/generated/graphql'
import { ADD_ITEM_TO_ORDER, REMOVE_FROM_ORDER } from '@/gql/queries/cartQueries'
import { apollo } from '@/lib/Apollo'
import { persistedProxy } from '@/lib/PersistedProxy'

type CartStoreProxy = {
  lines: OrderLine[]
  total: number
}

export const cartStore = persistedProxy<CartStoreProxy>('cartStore', {
  lines: [],
  total: 0,
})

export const addItemToCart = async (payload: MutationAddItemToOrderArgs) => {
  const { data, errors } = await apollo.mutate({
    mutation: ADD_ITEM_TO_ORDER,
    variables: { ...payload },
    fetchPolicy: 'no-cache',
  })

  if (errors) {
    throw errors.at(0)
  }

  if (!data) return null

  if (data.addItemToOrder.__typename === 'Order') {
    cartStore.lines = data.addItemToOrder.lines as OrderLine[]
    cartStore.total = data.addItemToOrder.total
  }

  if (data.addItemToOrder.__typename === 'InsufficientStockError') {
    throw new Error('Insufficient Stock')
  }
}

export const removeFromCart = async (payload: MutationRemoveOrderLineArgs) => {
  const { data, errors } = await apollo.mutate({
    mutation: REMOVE_FROM_ORDER,
    variables: { ...payload },
    fetchPolicy: 'no-cache',
  })

  if (errors) {
    throw errors.at(0)
  }

  if (!data) return null

  if (data.removeOrderLine.__typename === 'Order') {
    cartStore.lines = data.removeOrderLine.lines as OrderLine[]
    cartStore.total = data.removeOrderLine.total
  }
}
