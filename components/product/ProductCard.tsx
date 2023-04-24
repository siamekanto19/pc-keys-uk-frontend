import { ActionIcon, Box, Button, Flex, Image, Paper, Text } from '@mantine/core'
import Link from 'next/link'
import React, { FC, Fragment, useState } from 'react'
import { Eye } from 'tabler-icons-react'
import ProductQuickView from './ProductQuickView'
import { ProductEntity } from '@/gql/generated/graphql'
import StrapiMedia from '../core/StrapiMedia'

type Props = {
  withBorder?: boolean
  product?: ProductEntity
}

const ProductCard: FC<Props> = ({ withBorder, product }) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  if (!product) return null
  return (
    <Fragment>
      <ProductQuickView product={product} isOpen={quickViewOpen} onClose={() => setQuickViewOpen(false)} />
      <Paper className='relative hover:shadow-md' withBorder={withBorder} radius={0} p='md'>
        <Box p='sm' className='relative group'>
          <ActionIcon
            onClick={() => setQuickViewOpen(true)}
            sx={(theme) => ({ background: theme.colors.yellow.at(7) })}
            className='absolute top-[40%] left-[40%] z-20 shadow-lg hidden group-hover:grid'
            variant='filled'
            size='lg'
            radius={0}
          >
            <Eye />
          </ActionIcon>
          <StrapiMedia data={product.attributes?.featured_image} />
        </Box>
        <Link href={`/product/${product.attributes?.slug}`}>
          <Text mt='sm' className='uppercase hover:text-[var(--mantine-color-brand-0)] text-sm'>
            {product.attributes?.name}
          </Text>
        </Link>
        <Flex align='center' gap='sm'>
          <Text className='text-lg font-medium text-red-500 line-through'>£{product.attributes?.product_variants?.data.at(0)?.attributes?.price}</Text>
          <Text className='text-lg font-medium'>£{product.attributes?.product_variants?.data.at(0)?.attributes?.current_price}</Text>
        </Flex>
        <Button className='uppercase' radius={0} color='yellow' mt='xl' variant='filled' size='sm' fullWidth>
          Add To Cart
        </Button>
      </Paper>
    </Fragment>
  )
}

export default ProductCard
