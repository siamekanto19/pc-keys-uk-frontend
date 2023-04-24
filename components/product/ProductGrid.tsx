import { Box } from '@mantine/core'
import React, { FC } from 'react'
import ProductCard from './ProductCard'
import { ProductEntity } from '@/gql/generated/graphql'

type Props = {
  products: ProductEntity[]
}

const ProductGrid: FC<Props> = ({ products }) => {
  return (
    <Box className='grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  )
}

export default ProductGrid
