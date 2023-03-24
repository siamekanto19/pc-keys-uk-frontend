import { Button, Image, Paper, Text } from '@mantine/core'
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
      <Button radius={0} color='yellow' mt='xl' variant='outline' size='md'>
        Add To Cart
      </Button>
    </Paper>
  )
}

export default ProductCard
