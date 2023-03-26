import { Box, Modal, Paper, Title, Image, Text, Button, Flex, Radio } from '@mantine/core'
import React, { FC, useState } from 'react'
import { X } from 'tabler-icons-react'
import ProductOverviewSection from './ProductOverviewSection'
import ProductQuantitySelector from './ProductQuantitySelector'

type Props = {
  isOpen: boolean
  onClose: () => any
}

const ProductQuickView: FC<Props> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <Modal radius={0} onClose={onClose} opened={isOpen} padding='xl' withCloseButton={false} size='90%'>
      <Paper onClick={onClose} className='w-9 h-9 bg-black fixed top-0 right-0 grid place-items-center cursor-pointer z-20' radius={0}>
        <X color='white' size={20} />
      </Paper>
      <Box mt='lg' pt='xl' className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10'>
        <Box className='col-span-1 mx-auto'>
          <Image width={250} src='/img/norton.jpg' />
        </Box>
        <Box className='col-span-1 flex flex-col gap-y-4'>
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
    </Modal>
  )
}

export default ProductQuickView
