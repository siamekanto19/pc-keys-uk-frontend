import { HomepageBodyDynamicZone, Maybe } from '@/gql/generated/graphql'
import { Box, Title } from '@mantine/core'
import React, { FC } from 'react'
import ProductCarousel from '../product/ProductCarousel'
import RichText from './RichText'
import FeaturedCategories from '../category/FeaturedCategories'

type Props = {
  zone: Maybe<HomepageBodyDynamicZone>
}

const DynamicZone: FC<Props> = ({ zone }) => {
  if (!zone) return null
  if (zone.__typename === 'ComponentHomeFeaturedCollections') {
    return (
      <Box mt='lg'>
        <FeaturedCategories data={zone} />
        <Box mt='lg'>
          <RichText data={zone.content} />
        </Box>
      </Box>
    )
  }

  if (zone.__typename === 'ComponentHomeProductsFromCollection') {
    return (
      <Box mt='lg'>
        <Title order={2} className='uppercase'>
          {zone.title}
        </Title>
        <div className='w-full h-[4px] bg-red-500 block mt-1'></div>
        <ProductCarousel products={zone.collection?.data?.attributes?.products?.data} />
        <Box mt='lg'>
          <RichText data={zone.content} />
        </Box>
      </Box>
    )
  }

  return null
}

export default DynamicZone
