import { Box } from '@mantine/core'
import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
  return (
    <Box className='grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  )
}

export default ProductGrid
