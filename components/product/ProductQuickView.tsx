import { Box, Modal, Paper, Title, Image, Text, Button, Flex, Radio } from '@mantine/core'
import React, { FC, useMemo, useState } from 'react'
import { X } from 'tabler-icons-react'
import ProductOverviewSection from './ProductOverviewSection'
import ProductQuantitySelector from './ProductQuantitySelector'
import { ProductEntity } from '@/gql/generated/graphql'
import StrapiMedia from '../core/StrapiMedia'

type Props = {
  isOpen: boolean
  onClose: () => any
  product: ProductEntity
}

const ProductQuickView: FC<Props> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariantId, setSelectedVariantId] = useState(product.attributes?.product_variants?.data.at(0)?.id ?? '')

  const renderPrice = useMemo(() => {
    if (!product.attributes?.product_variants?.data) return ''
    for (const variant of product.attributes?.product_variants.data) {
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

  return (
    <Modal radius={0} onClose={onClose} opened={isOpen} padding='xl' withCloseButton={false} size='90%'>
      <Paper onClick={onClose} className='w-9 h-9 bg-black fixed top-0 right-0 grid place-items-center cursor-pointer z-20' radius={0}>
        <X color='white' size={20} />
      </Paper>
      <Box mt='lg' pt='xl' className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10'>
        <Box className='col-span-1 mx-auto'>
          <StrapiMedia width={250} data={product.attributes?.featured_image} />
        </Box>
        <Box className='col-span-1 flex flex-col gap-y-4'>
          <Title order={2}>{product.attributes?.name}</Title>
          <Text className='text-sm font-medium text-gray-500'>{product.attributes?.sku}</Text>
          {product.attributes?.in_stock && <Text className='uppercase text-green-600'>IN STOCK</Text>}
          {renderPrice}
          <Flex direction='column' gap='xs'>
            <Title order={5} className='font-semibold'>
              Product Options
            </Title>
            <Radio.Group onChange={setSelectedVariantId} value={selectedVariantId} className='flex flex-col gap-4' title='Product Options'>
              {product.attributes?.product_variants?.data.map((variant) => (
                <Radio value={variant.id ?? ''} label={variant.attributes?.name} />
              ))}
            </Radio.Group>
          </Flex>
          <Box mt='lg'>
            <ProductQuantitySelector max={50} onQuantityChange={setQuantity} />
          </Box>
          <Button size='lg' fullWidth radius={0} color='yellow' mt='md'>
            ADD TO CART
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ProductQuickView
