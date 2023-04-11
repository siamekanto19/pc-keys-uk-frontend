import { OrderLine } from '@/gql/generated/graphql'
import { useNotifications } from '@/hooks/useNotifications'
import { closeCart } from '@/store'
import { cartStore, removeFromCart } from '@/store/CartStore'
import { formatPrice } from '@/utils/FormatPrice'
import { Button, Flex, Title, Image, Text } from '@mantine/core'
import React, { Fragment, useState } from 'react'
import { useSnapshot } from 'valtio'

const CartOrderLines = () => {
  const { lines } = useSnapshot(cartStore)
  if (lines.length < 1) {
    return (
      <Flex direction='column' gap='lg' px='lg' mt={100}>
        <Title align='center' order={5} className='font-medium'>
          There is no item in your cart
        </Title>
        <Button onClick={closeCart} radius={0} size='sm' fullWidth>
          Continue Shopping
        </Button>
      </Flex>
    )
  }
  return (
    <Flex direction='column' gap='lg' px='lg'>
      {lines.map((line) => (
        <LineItem {...(line as OrderLine)} />
      ))}
    </Flex>
  )
}

const LineItem = (item: OrderLine) => {
  const { showError } = useNotifications()
  const [loading, setLoading] = useState(false)
  const removeItem = async () => {
    setLoading(true)
    try {
      await removeFromCart({ orderLineId: item.id })
    } catch (error) {
      showError(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Fragment>
      <Flex px='lg' align='start' gap='lg' mt='xl'>
        <Image width={60} src={item.productVariant.product.featuredAsset?.source} />
        <Flex direction='column' gap='sm'>
          <Text className='text-sm font-medium'>
            {item.quantity}X {item.productVariant.sku}
          </Text>

          <Text className='text-sm lg:hidden font-medium'>{formatPrice(item.productVariant.price)}</Text>
        </Flex>
        <Text className='text-sm hidden lg:block font-medium'>{formatPrice(item.productVariant.price)}</Text>
      </Flex>
      <Flex justify='end'>
        <Button onClick={removeItem} loading={loading} className='w-24' size='xs' radius={0}>
          Remove
        </Button>
      </Flex>
    </Fragment>
  )
}

export default CartOrderLines
