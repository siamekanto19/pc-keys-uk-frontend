import CategoryFilters from '@/components/category/CategoryFilters'
import MainLayout from '@/components/layout/MainLayout'
import ProductGrid from '@/components/product/ProductGrid'
import { Box, Flex, Pagination, Paper, Select, Text, Title } from '@mantine/core'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, { FC } from 'react'
import { ArrowNarrowRight, ChevronDown } from 'tabler-icons-react'
import { apollo } from '../_app'
import { SINGLE_COLLECTION } from '@/gql/queries/collectionQueries'
import { PRODUCTS_BY_CATEGORY } from '@/gql/queries/productQueries'
import { CollectionEntityResponse, ProductEntityResponseCollection } from '@/gql/generated/graphql'
import RichText from '@/components/core/RichText'

type Props = {
  category: CollectionEntityResponse
  products: ProductEntityResponseCollection
}

const SingleCategoryPage: FC<Props> = ({ category, products }) => {
  return (
    <MainLayout withoutBackground>
      <Box py='sm' className='px-5 lg:px-0'>
        <Flex align='center' gap='xs' className='text-sm font-medium'>
          <Text>HOME</Text>
          <ArrowNarrowRight />
          <Text className='uppercase text-gray-500'>{category.data?.attributes?.name}</Text>
        </Flex>
        <Box mt='lg'>
          <Title order={3}>{category.data?.attributes?.name}</Title>
          <RichText blocks={category.data?.attributes?.description ?? ''} />
        </Box>
        <Box mt={75} className='grid grid-flow-row grid-cols-1 lg:grid-cols-7 xl:grid-cols-8 gap-5'>
          <Box className='lg:col-span-2'>
            <CategoryFilters />
          </Box>
          <Flex direction='column' gap='lg' className='lg:col-span-5 xl:col-span-6'>
            <Paper p='md' shadow='md' radius={0} className='text-sm flex items-center justify-between'>
              <Text className='font-medium'>Items 1-20 of 21</Text>
              <Flex align='center' gap='md'>
                <Text className='font-medium'>Sort By</Text>
                <Select
                  classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0' }}
                  rightSection={<ChevronDown className='text-gray-400 h-5' />}
                  placeholder='Select One'
                  radius={0}
                  data={[
                    { label: 'Position', value: 'position' },
                    { label: 'Price', value: 'price' },
                  ]}
                />
              </Flex>
            </Paper>
            <ProductGrid products={products.data} />
            <Paper shadow='md' radius={0} p='md' className='flex items-center justify-between gap-x-4'>
              <Pagination total={3} radius={0} color='yellow' />
              <Flex align='center' gap='sm' className='text-sm font-medium'>
                <Text>Show</Text>
                <Select
                  radius={0}
                  classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0' }}
                  rightSection={<ChevronDown className='text-gray-400 h-5' />}
                  width={50}
                  value='10'
                  data={['10', '20', '30', '40']}
                />
                <Text>Per page</Text>
              </Flex>
            </Paper>
          </Flex>
        </Box>
      </Box>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.collectionSlug as string
  const page = parseInt(context.query.page as string)

  const category = await apollo.query({
    query: SINGLE_COLLECTION,
    fetchPolicy: 'no-cache',
    variables: {
      slug,
      modelName: 'collection',
    },
  })

  if (category.data.findSlug?.__typename === 'CollectionEntityResponse') {
    if (!category.data.findSlug.data) {
      return {
        redirect: { destination: '/404', permanent: false },
      }
    }
  }

  const products = await apollo.query({
    query: PRODUCTS_BY_CATEGORY,
    fetchPolicy: 'no-cache',
    variables: {
      filters: {
        collections: { slug: { eq: slug } },
      },
      pagination: {
        page,
        pageSize: 25,
      },
    },
  })

  return { props: { category: category.data.findSlug, products: products.data.products } }
}

export default SingleCategoryPage
