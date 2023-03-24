import { Box, clsx, Flex, Title } from '@mantine/core'
import React, { FC } from 'react'
import ProductCarousel from './ProductCarousel'

type Props = {
  className?: string
}

const FeaturedProducts: FC<Props> = ({ className }) => {
  const responsive = {
    xl: {
      breakpoint: { max: 5000, min: 2001 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2048, min: 769 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 641 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1.3,
    },
  }
  return (
    <Box mt='xl' className={clsx(className)}>
      <Title order={2} className='uppercase w-full border-b border-red-500'>
        Featured Products
      </Title>
      <div className='w-full block bg-red-500 h-[4px] mt-1'></div>
      <ProductCarousel />
    </Box>
  )
}

export default FeaturedProducts
