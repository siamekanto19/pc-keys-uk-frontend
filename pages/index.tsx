import FeaturedCategories from '@/components/category/FeaturedCategories'
import FeaturedCategoryWithProducts from '@/components/category/FeaturedCategoryWithProducts'
import AboutCompany from '@/components/core/AboutCompany'
import MainLayout from '@/components/layout/MainLayout'
import FeaturedProducts from '@/components/product/FeaturedProducts'
import ProductCarousel from '@/components/product/ProductCarousel'
import { Box, Title, Text } from '@mantine/core'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { apollo } from './_app'
import { HOME_PAGE } from '@/gql/queries/homepageQuery'
import { REVALIDATE_TIME } from '@/env'
import { HomepageEntity } from '@/gql/generated/graphql'
import RichText from '@/components/core/RichText'
import DynamicZone from '@/components/core/DynamicZone'

type Props = {
  page: HomepageEntity
}

const IndexPage: NextPage<Props> = ({ page }) => {
  return (
    <MainLayout>
      <Box className='p-6 lg:p-10'>
        <Box>
          <Title order={2} align='center'>
            {page.attributes?.hero?.title}
          </Title>
          <RichText blocks={page.attributes?.hero?.content} />
        </Box>
        <Box mt='lg'>
          <FeaturedCategoryWithProducts data={page.attributes?.collection_tabs} />
        </Box>
        {page.attributes?.body?.map((zone, index) => (
          <DynamicZone key={`${zone?.__typename}-${index}`} zone={zone} />
        ))}
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apollo.query({
    query: HOME_PAGE,
    fetchPolicy: 'no-cache',
  })

  return { props: { page: data.homepage?.data }, revalidate: REVALIDATE_TIME }
}

export default IndexPage
