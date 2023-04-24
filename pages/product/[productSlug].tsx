import AboutCompany from '@/components/core/AboutCompany'
import MainLayout from '@/components/layout/MainLayout'
import ProductDescription from '@/components/product/ProductDescription'
import ProductOverviewSection from '@/components/product/ProductOverviewSection'
import ProductQuantitySelector from '@/components/product/ProductQuantitySelector'
import { Box, Image, Title, Text, Flex, Radio, Button, Accordion } from '@mantine/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC, useMemo, useState } from 'react'
import { Product, ProductEntityResponse } from '@/gql/generated/graphql'
import { REVALIDATE_TIME } from '@/env'
import { useNotifications } from '@/hooks/useNotifications'
import { openCart } from '@/store'
import { apollo } from '../_app'
import { PRODUCT_SLUGS, SINGLE_PRODUCT } from '@/gql/queries/productQueries'
import StrapiMedia from '@/components/core/StrapiMedia'
import { useCart } from 'react-use-cart'

type Props = {
  product: Product
}

const ProductPage: FC<Props> = ({ product }) => {
  const { showError } = useNotifications()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState(product.product_variants?.data.at(0)?.id ?? '')
  const [loading, setLoading] = useState(false)

  const renderPrice = useMemo(() => {
    if (!product.product_variants?.data) return ''
    for (const variant of product.product_variants.data) {
      if (variant.id === selectedVariantId) {
        return (
          <Flex align='center' gap='sm' className='font-medium'>
            <Text className='text-lg text-red-500'>
              Regular Price <span className='line-through'>£{variant.attributes?.price}</span>
            </Text>
            <Text className='text-lg'>£{variant.attributes?.current_price}</Text>
          </Flex>
        )
      }
    }
    return null
  }, [selectedVariantId])

  const selectedVariant = useMemo(() => {
    if (!product.product_variants?.data) return null
    for (const variant of product.product_variants.data) {
      if (variant.id === selectedVariantId) {
        return variant.attributes
      }
    }
    return null
  }, [selectedVariantId])

  const addToCart = () => {
    addItem({
      id: selectedVariantId,
      quantity,
      price: selectedVariant?.current_price ?? 0,
      name: selectedVariant?.name,
      sku: selectedVariant?.sku,
      image: product.featured_image,
    })
    openCart()
  }

  return (
    <MainLayout>
      <Box p='lg' mt='lg' pt='xl' className='grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-10'>
        <Box className='lg:col-span-3 mx-auto'>
          <StrapiMedia data={product.featured_image} width={300} className='w-full' />
        </Box>
        <Box className='lg:col-span-2 flex flex-col gap-y-4'>
          <Title order={2}>{product.name}</Title>
          <Text className='text-sm font-medium text-gray-500'>{product.name}</Text>
          {product.in_stock && <Text className='uppercase text-green-600'>IN STOCK</Text>}
          {renderPrice}
          <Flex direction='column' gap='xs'>
            <Title order={5} className='font-semibold'>
              Product Options
            </Title>
            <Radio.Group defaultValue={selectedVariantId} onChange={setSelectedVariantId} className='flex flex-col gap-4' title='Product Options'>
              {product.product_variants?.data?.map((variant) => (
                <Radio key={variant.id} value={variant.id ?? ''} label={variant.attributes?.sku} />
              ))}
            </Radio.Group>
          </Flex>
          <Box mt='lg'>
            <ProductQuantitySelector max={50} onQuantityChange={setQuantity} />
          </Box>
          <Button loading={loading} onClick={addToCart} size='lg' fullWidth radius={0} color='yellow' mt='md'>
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
              <ProductDescription description={product.long_description ?? ''} />
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
      modelName: 'product',
      slug,
      publicationState: 'live',
    },
    fetchPolicy: 'no-cache',
  })

  const product = data.findSlug as ProductEntityResponse

  return {
    props: {
      product: product.data?.attributes,
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
  data.products?.data.forEach((product) => {
    paths.push({ params: { productSlug: product.attributes?.slug ?? '' } })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default ProductPage
