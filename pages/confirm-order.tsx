import MainLayout from '@/components/layout/MainLayout'
import OrderSummary from '@/components/order/OrderSummary'
import { Box, Button, Paper, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { Check } from 'tabler-icons-react'

const ConfirmOrderPage = () => {
  return (
    <MainLayout withoutBackground>
      <Box className='grid grid-flow-row grid-cols-1 md:grid-cols-5 gap-8'>
        <Paper p='lg' radius={0} shadow='sm' className='md:col-span-3 flex flex-col items-center justify-center'>
          <div className='w-24 h-24 bg-green-200 rounded-full text-green-600 grid place-items-center'>
            <Check size={40} />
          </div>
          <Text className='text-lg text-center mt-4'>Your order has been placed. You will soon receive the delivery</Text>
          <Link href='/account/orders'>
            <Button radius={0} mt='xl' size='md'>
              See to your orders
            </Button>
          </Link>
        </Paper>
        <Paper p='lg' color='white' radius={0} shadow='md' className='md:col-span-2'>
          <OrderSummary />
        </Paper>
      </Box>
    </MainLayout>
  )
}

export default ConfirmOrderPage
