import MainLayout from '@/components/layout/MainLayout'
import OrderSummary from '@/components/order/OrderSummary'
import { AddressInput } from '@/gql/generated/graphql'
import { useNotifications } from '@/hooks/useNotifications'
import { openAuthDrawer } from '@/store'
import { checkoutStore, setShippingAddress } from '@/store/checkoutStore'
import { useMutation } from '@apollo/client'
import { Box, Button, Paper, Radio, Select, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import { GetStaticProps, NextPage } from 'next/types'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ChevronDown } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'

type Props = {
  countries: any
}

const CheckoutPage: NextPage<Props> = ({ countries }) => {
  const router = useRouter()
  const { shippingAddress } = useSnapshot(checkoutStore)
  const { register, handleSubmit } = useForm({
    defaultValues: shippingAddress,
  })

  // const [mutate, { loading, error }] = useMutation(SET_SHIPPING_ADDRESS)

  const updateShippingAddress = (data: Partial<AddressInput>) => {
    setShippingAddress(data)
    router.push('/checkout/payment')
  }

  return (
    <MainLayout withoutBackground>
      <Title order={3} my='md'>
        CHECKOUT
      </Title>

      <Box className='w-full grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-8'>
        <Paper p='xl' color='white' radius={0} shadow='md' className='lg:col-span-3'>
          <Title onClick={openAuthDrawer} mb='lg' order={5} className='font-medium text-red-500 underline cursor-pointer'>
            Already have an account?
          </Title>
          <Title order={3}>Shipping Address</Title>
          <form onSubmit={handleSubmit(updateShippingAddress)} className='mt-6 grid grid-flow-row grid-cols-2 gap-4'>
            <TextInput className='col-span-2' classNames={{ label: 'pb-2' }} label='Email Address' type='email' size='sm' radius={0} {...register('email')} />
            <TextInput required className='col-span-2' classNames={{ label: 'pb-2' }} label='Full Name' type='text' size='sm' radius={0} {...register('first_name')} />
            <TextInput className='col-span-2' classNames={{ label: 'pb-2' }} label='Company Name' type='text' size='sm' radius={0} {...register('company_name')} />
            <TextInput required className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Street Address 1' type='text' size='sm' radius={0} {...register('address_line_1')} />
            <TextInput className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Street Address 2' type='text' size='sm' radius={0} {...register('address_line_2')} />
            {/* <Controller
              name='country'
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Select
                  value={value}
                  required
                  onChange={onChange}
                  name={name}
                  className='col-span-2 md:col-span-1'
                  classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0', label: 'pb-2' }}
                  rightSection={<ChevronDown className='text-gray-400 h-5' />}
                  radius={0}
                  searchable
                  label='Country'
                  placeholder='Select a country'
                  data={countries.map((country) => ({ label: country.name, value: country.code }))}
                />
              )}
            /> */}
            <TextInput required className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='State/Province' type='text' size='sm' radius={0} {...register('state')} />
            <TextInput required className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='City' type='text' size='sm' radius={0} {...register('city')} />
            <TextInput required className='col-span-2 md:col-span-1' classNames={{ label: 'pb-2' }} label='Postal/Zip Code' type='text' size='sm' radius={0} {...register('zip_code')} />
            <TextInput required className='col-span-2' classNames={{ label: 'pb-2' }} label='Phone Number' type='text' size='sm' radius={0} {...register('phone_number')} />
            <Title order={4} mt='xl'>
              Shipping Methods
            </Title>
            <Radio.Group className='col-span-2' value='free_shipping'>
              <Paper radius={0} withBorder p='md' mt='md' className='flex justify-between items-center'>
                <Radio size='sm' value='free_shipping' label='£0.00' checked />
                <Text className='text-sm'>Free</Text>
                <Text className='text-sm'>Free Shipping</Text>
              </Paper>
            </Radio.Group>
            <Title mt='xl' order={4}>
              Additional Information
            </Title>
            <Textarea className='col-span-2' size='sm' mt='md' radius={0} cols={10} minRows={6} autosize />
            <Button mt='md' size='md' radius={0} type='submit'>
              Submit
            </Button>
          </form>
        </Paper>
        <Paper p='lg' color='white' radius={0} shadow='md' className='lg:col-span-2'>
          <OrderSummary />
        </Paper>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await apollo.query({
  //   query: AVAILABLE_COUNTRIES,
  //   fetchPolicy: 'no-cache',
  // })

  return { props: {} }
}

export default CheckoutPage
