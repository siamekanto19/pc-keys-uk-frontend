import { Box, Flex, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import { useCart } from 'react-use-cart'
import StrapiMedia from '../core/StrapiMedia'

const OrderSummary = () => {
  const { items, cartTotal } = useCart()
  return (
    <Box className='flex flex-col'>
      <Title order={3}>Order Summary</Title>
      <Text className='text-gray-500 font-medium'>1 Item in cart</Text>
      {items.map((item) => (
        <Flex key={item.id} px='lg' align='start' gap='lg' mt='xl'>
          <StrapiMedia width={75} data={item.image} />
          <Flex direction='column' gap='sm' className='font-medium'>
            <Text className='text-sm'>
              {item.quantity}X {item.name}
            </Text>
            <Text className='text-sm lg:hidden font-medium'>£{item.price}</Text>
          </Flex>
          <Text className='text-sm hidden lg:block font-medium'>£{item.price}</Text>
        </Flex>
      ))}
      <Paper mt='xl' radius={0} p='md' className='bg-gray-100 flex flex-col gap-y-4'>
        <Flex justify='space-between' className='text-sm font-medium'>
          <Text>Cart Subtotal</Text>
          <Text>£{cartTotal.toPrecision(5)}</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm font-medium'>
          <Text>Shipping</Text>
          <Text>£0.00</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm' mt='lg'>
          <Title order={4}>Order Total</Title>
          <Title order={4}>£{cartTotal.toPrecision(5)}</Title>
        </Flex>
      </Paper>
    </Box>
  )
}

export default OrderSummary
