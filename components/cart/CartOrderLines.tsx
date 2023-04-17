import { closeCart } from '@/store'
import { Button, Flex, Title, Image, Text } from '@mantine/core'
import React, { Fragment } from 'react'
import { Item, useCart } from 'react-use-cart'
import StrapiMedia from '../core/StrapiMedia'

const CartOrderLines = () => {
  const { items, isEmpty } = useCart()
  if (isEmpty) {
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
      {items.map((item) => (
        <LineItem {...item} />
      ))}
    </Flex>
  )
}

const LineItem = (item: Item) => {
  const { removeItem } = useCart()
  return (
    <Fragment>
      <Flex px='lg' align='start' gap='lg' mt='xl'>
        <StrapiMedia width={60} data={item.image} />
        <Flex direction='column' gap='sm'>
          <Text className='text-sm font-medium'>
            {item.quantity}X {item.name}
          </Text>
          <Text className='text-sm lg:hidden font-medium'>£{item.price}</Text>
        </Flex>
        <Text className='text-sm hidden lg:block font-medium'>£{item.price}</Text>
      </Flex>
      <Flex justify='end'>
        <Button onClick={() => removeItem(item.id)} className='w-24' size='xs' radius={0}>
          Remove
        </Button>
      </Flex>
    </Fragment>
  )
}

export default CartOrderLines
