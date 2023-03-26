import { Box, Flex, Image, Title } from '@mantine/core'
import React from 'react'

const DeliverySteps = () => {
  return (
    <Flex direction='column' mt='lg' gap={75}>
      <Box className='flex flex-col gap-y-8 items-center'>
        <Title order={5} className='font-semibold'>
          1. Order
        </Title>
        <Image src='/img/order.jpeg' width={100} />
      </Box>
      <Box className='flex flex-col gap-y-8 items-center'>
        <Title order={5} className='font-semibold'>
          1. Email Delivery
        </Title>
        <Image src='/img/email.jpeg' width={100} />
      </Box>
      <Box className='flex flex-col gap-y-8 items-center'>
        <Title order={5} className='font-semibold'>
          1. Install Product
        </Title>
        <Image src='/img/install.jpeg' width={100} />
      </Box>
    </Flex>
  )
}

export default DeliverySteps
