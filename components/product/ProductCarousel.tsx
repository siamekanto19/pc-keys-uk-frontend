import { ActionIcon } from '@mantine/core'
import React, { FC } from 'react'
import Carousel, { ArrowProps } from 'react-multi-carousel'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import ProductCard from './ProductCard'
import { ProductEntity } from '@/gql/generated/graphql'

type Props = {
  products?: ProductEntity[]
}

const ProductCarousel: FC<Props> = ({ products }) => {
  if (!products) return null
  const responsive = {
    big: {
      breakpoint: { max: 5000, min: 2049 },
      items: 5,
    },
    xl: {
      breakpoint: { max: 2048, min: 1281 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 641 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  }
  return (
    <Carousel customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />} className='mt-8' responsive={responsive} arrows itemClass='px-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} withBorder />
      ))}
    </Carousel>
  )
}

const CustomLeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <ActionIcon variant='filled' className='absolute left-0' onClick={onClick} sx={(theme) => ({ background: theme.colors.yellow.at(6) })} size='lg' radius={0}>
      <ChevronLeft color='white' />
    </ActionIcon>
  )
}
const CustomRightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <ActionIcon variant='filled' className='absolute right-0' onClick={onClick} sx={(theme) => ({ background: theme.colors.yellow.at(6) })} size='lg' radius={0}>
      <ChevronRight color='white' />
    </ActionIcon>
  )
}

export default ProductCarousel
