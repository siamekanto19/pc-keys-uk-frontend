import { cartStore } from '@/store/CartStore'
import { formatPrice } from '@/utils/FormatPrice'
import { Box, Flex, Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import { useSnapshot } from 'valtio'

const OrderSummary = () => {
  const { lines, total } = useSnapshot(cartStore)
  return (
    <Box className='flex flex-col'>
      <Title order={3}>Order Summary</Title>
      <Text className='text-gray-500 font-medium'>1 Item in cart</Text>
      {lines.map((line) => (
        <Flex key={line.id} px='lg' align='start' gap='lg' mt='xl'>
          <Image width={75} src={line.productVariant.product.featuredAsset?.source} />
          <Flex direction='column' gap='sm' className='font-medium'>
            <Text className='text-sm'>
              {line.quantity}X {line.productVariant.sku}
            </Text>
            <Text className='text-sm lg:hidden font-medium'>{formatPrice(line.productVariant.price)}</Text>
          </Flex>
          <Text className='text-sm hidden lg:block font-medium'>{formatPrice(line.productVariant.price)}</Text>
        </Flex>
      ))}
      <Paper mt='xl' radius={0} p='md' className='bg-gray-100 flex flex-col gap-y-4'>
        <Flex justify='space-between' className='text-sm font-medium'>
          <Text>Cart Subtotal</Text>
          <Text>{formatPrice(total)}</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm font-medium'>
          <Text>Shipping</Text>
          <Text>£0.00</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm' mt='lg'>
          <Title order={4}>Order Total</Title>
          <Title order={4}>{formatPrice(total)}</Title>
        </Flex>
      </Paper>
    </Box>
  )
}

export default OrderSummary
