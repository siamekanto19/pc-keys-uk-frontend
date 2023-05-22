import MainLayout from '@/components/layout/MainLayout'
import OrderSummary from '@/components/order/OrderSummary'
import { ALL_COUNTRIES } from '@/utils/countries'
import { Box, Paper, Radio, Select, Text, Textarea, TextInput, Title } from '@mantine/core'
import { NextPage } from 'next/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ChevronDown } from 'tabler-icons-react'

const CheckoutPage: NextPage = () => {
  const { register, handleSubmit } = useForm()
  return (
    <MainLayout withoutBackground>
      <Title order={3} my='md'>
        CHECKOUT
      </Title>
      <Box className='w-full grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-8'>
        <Paper p='xl' color='white' radius={0} shadow='md' className='lg:col-span-3'>
          <Title order={3}>Shipping Address</Title>
          <form className='mt-6 grid grid-flow-row grid-cols-2 gap-4'>
            <TextInput className='col-span-2' classNames={{ label: 'pb-2' }} label='Email Address' type='email' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='First Name' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Last Name' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2' classNames={{ label: 'pb-2' }} label='Company Name' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Street Address' type='text' size='sm' radius={0} />
            <Select
              className='col-span-2 md:col-span-1'
              classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0', label: 'pb-2' }}
              rightSection={<ChevronDown className='text-gray-400 h-5' />}
              radius={0}
              searchable
              label='Country'
              placeholder='Select a country'
              data={[]}
            />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='State/Province' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='City' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Postal/Zip Code' type='text' size='sm' radius={0} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Phone Number' type='text' size='sm' radius={0} />
          </form>
          <Title order={4} mt='xl'>
            Shipping Methods
          </Title>
          <Radio.Group value='free_shipping'>
            <Paper radius={0} withBorder p='md' mt='md' className='flex justify-between items-center'>
              <Radio size='sm' value='free_shipping' label='£0.00' checked />
              <Text className='text-sm'>Free</Text>
              <Text className='text-sm'>Free Shipping</Text>
            </Paper>
          </Radio.Group>
          <Title mt='xl' order={4}>
            Additional Information
          </Title>
          <Textarea size='sm' mt='md' radius={0} cols={10} minRows={6} autosize />
          <Title mt={50} order={4}>
            Payment Method
          </Title>
          <Paper mt='xl' p={0} radius={0} className='bg-gray-100 h-[20rem] grid place-items-center'>
            <Text>Payment Buttons to be rendered by payment services</Text>
          </Paper>
        </Paper>
        <Paper p='lg' color='white' radius={0} shadow='md' className='lg:col-span-2'>
          <OrderSummary />
        </Paper>
      </Box>
    </MainLayout>
  )
}

export default CheckoutPage
