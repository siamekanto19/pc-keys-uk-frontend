import { Button, Flex, Image, Paper, Text } from '@mantine/core'
import React from 'react'

const ProductCard = () => {
  return (
    <Paper className='relative hover:shadow-md' withBorder radius={0} p='md'>
      <Image src='/img/norton.jpg' />
      <a href='#'>
        <Text mt='sm' className='uppercase hover:text-[var(--mantine-color-brand-0)] text-sm'>
          Norton 360 Premium Internet and Device Security with VPN & Password Manager 2023 Digital License
        </Text>
      </a>
      <Flex align='center' gap='sm'>
        <Text className='text-lg font-medium text-red-500 line-through'>£50</Text>
        <Text className='text-lg font-medium'>£50</Text>
      </Flex>
      <Button className='uppercase' radius={0} color='yellow' mt='xl' variant='filled' size='sm' fullWidth>
        Add To Cart
      </Button>
    </Paper>
  )
}

export default ProductCard
