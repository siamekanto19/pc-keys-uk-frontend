import { Box, Flex, Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'

const OrderSummary = () => {
  return (
    <Box className='flex flex-col'>
      <Title order={3}>Order Summary</Title>
      <Text className='text-gray-500 font-medium'>1 Item in cart</Text>
      <Flex px='lg' align='start' gap='lg' mt='xl'>
        <Image width={75} src='/img/norton.jpg' />
        <Flex direction='column' gap='sm'>
          <Text className='text-sm'>Norton 360 Platinum Internet and Device Security with VPN & Password Manager 2023 Digital License</Text>
          <Text className='text-sm lg:hidden'>£79.99</Text>
        </Flex>
        <Text className='text-sm hidden lg:block'>£79.99</Text>
      </Flex>
      <Paper mt='xl' radius={0} p='md' className='bg-gray-100 flex flex-col gap-y-4'>
        <Flex justify='space-between' className='text-sm'>
          <Text>Cart Subtotal</Text>
          <Text>£79.99</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm'>
          <Text>Shipping</Text>
          <Text>£0.00</Text>
        </Flex>
        <Flex justify='space-between' className='text-sm' mt='lg'>
          <Title order={4}>Order Total</Title>
          <Title order={4}>£79.99</Title>
        </Flex>
      </Paper>
    </Box>
  )
}

export default OrderSummary
