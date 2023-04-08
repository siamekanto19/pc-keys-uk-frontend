import AboutCompany from '@/components/core/AboutCompany'
import MainLayout from '@/components/layout/MainLayout'
import ProductDescription from '@/components/product/ProductDescription'
import ProductOverviewSection from '@/components/product/ProductOverviewSection'
import ProductQuantitySelector from '@/components/product/ProductQuantitySelector'
import { Box, Image, Title, Text, Flex, Radio, Button, Accordion } from '@mantine/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC, useMemo, useState } from 'react'
import { apollo } from '../_app'
import { PRODUCT_SLUGS, SINGLE_PRODUCT } from '@/gql/queries/productQueries'
import { Product } from '@/gql/generated/graphql'
import { formatPrice } from '@/utils/FormatPrice'
import { REVALIDATE_TIME } from '@/env'

type Props = {
  product: Product
}

const ProductPage: FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants.at(0)?.id ?? '')
  const displayPrice = useMemo(() => {
    for (const variant of product.variants) {
      if (variant.id === selectedVariantId) {
        return formatPrice(variant.price)
      }
    }

    return ''
  }, [selectedVariantId])
  return (
    <MainLayout>
      <Box p='lg' mt='lg' pt='xl' className='grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-10'>
        <Box className='lg:col-span-3 mx-auto'>
          <Image width={300} src={product.featuredAsset?.source} className='w-full' />
        </Box>
        <Box className='lg:col-span-2 flex flex-col gap-y-4'>
          <Title order={2}>{product.name}</Title>
          <Text className='text-sm font-medium text-gray-500'>{product.name}</Text>
          <Text className='uppercase text-green-600'>IN STOCK</Text>
          <Flex align='center' gap='sm'>
            <Text className='text-lg text-red-500'>
              Regular Price <span className='line-through'>{formatPrice(product.customFields?.oldPrice)}</span>
            </Text>
            <Text className='text-lg'>{displayPrice}</Text>
          </Flex>
          <Flex direction='column' gap='xs'>
            <Title order={5} className='font-semibold'>
              Product Options
            </Title>
            <Radio.Group defaultValue={product.variants.at(0)?.id} onChange={setSelectedVariantId} className='flex flex-col gap-4' title='Product Options'>
              {product.variants.map((variant) => (
                <Radio key={variant.id} value={variant.id} label={variant.sku} />
              ))}
            </Radio.Group>
          </Flex>
          <Box mt='lg'>
            <ProductQuantitySelector max={50} onQuantityChange={setQuantity} />
          </Box>
          <Button size='lg' fullWidth radius={0} color='yellow' mt='md'>
            ADD TO CART
          </Button>
          <Box mt='lg'>
            <ProductOverviewSection name={product.name} />
          </Box>
        </Box>
      </Box>
      <Box py='xl' px='lg'>
        <Accordion radius={0} mt='lg' variant='separated'>
          <Accordion.Item value='description'>
            <Accordion.Control>Product Details</Accordion.Control>
            <Accordion.Panel px='lg'>
              <ProductDescription description={product.description} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.productSlug as string

  const { data } = await apollo.query({
    query: SINGLE_PRODUCT,
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
  })

  return {
    props: {
      product: data.product,
    },
    revalidate: REVALIDATE_TIME,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apollo.query({
    query: PRODUCT_SLUGS,
    fetchPolicy: 'no-cache',
  })

  const paths: { params: { productSlug: string } }[] = []

  data.products.items.forEach((item) => {
    paths.push({ params: { productSlug: item.slug } })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default ProductPage
