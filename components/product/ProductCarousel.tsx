import React from 'react'
import Carousel from 'react-multi-carousel'
import ProductCard from './ProductCard'

const ProductCarousel = () => {
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
    <Carousel className='mt-8' responsive={responsive} arrows itemClass='px-4 md:px-0 md:pr-4'>
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
      <ProductCard withBorder />
    </Carousel>
  )
}

export default ProductCarousel
