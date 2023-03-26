import AboutCompany from '@/components/core/AboutCompany'
import MainLayout from '@/components/layout/MainLayout'
import ProductDescription from '@/components/product/ProductDescription'
import ProductOverviewSection from '@/components/product/ProductOverviewSection'
import ProductQuantitySelector from '@/components/product/ProductQuantitySelector'
import { Box, Image, Title, Text, Flex, Radio, Button, Accordion } from '@mantine/core'
import React, { useState } from 'react'

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <MainLayout>
      <Box p='lg' mt='lg' pt='xl' className='grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-10'>
        <Box className='lg:col-span-3 mx-auto'>
          <Image width={300} src='/img/norton.jpg' className='w-full' />
        </Box>
        <Box className='lg:col-span-2 flex flex-col gap-y-4'>
          <Title order={2}>Norton 360 Platinum Internet and Device Security with VPN & Password Manager 2023 Digital License</Title>
          <Text className='text-sm font-medium text-gray-500'>SKU NORTON 360 PLATINUM 2023 DIGITAL LICENSE FOR 10 DEVICES-1</Text>
          <Text className='uppercase text-green-600'>IN STOCK</Text>
          <Flex align='center' gap='sm'>
            <Text className='text-lg text-red-500'>
              Regular Price <span className='line-through'>£50</span>
            </Text>
            <Text className='text-lg'>£50</Text>
          </Flex>
          <Flex direction='column' gap='xs'>
            <Title order={5} className='font-semibold'>
              Product Options
            </Title>
            <Radio.Group className='flex flex-col gap-4' title='Product Options'>
              <Radio value='10-device' label='Norton 360 Premium for 10 Devices - 12 Months License - Digital Delivery via Email' />
              <Radio value='20-device' label='Norton 360 Premium for 20 Devices - 12 Months License - Digital Delivery via Email Extra + £77.95' />
            </Radio.Group>
          </Flex>
          <Box mt='lg'>
            <ProductQuantitySelector max={50} onQuantityChange={setQuantity} />
          </Box>
          <Button size='lg' fullWidth radius={0} color='yellow' mt='md'>
            ADD TO CART
          </Button>
          <Box mt='lg'>
            <ProductOverviewSection />
          </Box>
        </Box>
      </Box>
      <Box py='xl' px='lg'>
        <Accordion radius={0} mt='lg' variant='separated'>
          <Accordion.Item value='description'>
            <Accordion.Control>Product Details</Accordion.Control>
            <Accordion.Panel px='lg'>
              <ProductDescription />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </MainLayout>
  )
}

export default ProductPage
