import MainLayout from '@/components/layout/MainLayout'
import OrderSummary from '@/components/order/OrderSummary'
import { Box, Paper, Text, Title, Image, LoadingOverlay } from '@mantine/core'
import { Elements } from '@stripe/react-stripe-js'
import { NextPage } from 'next/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loadStripe } from '@stripe/stripe-js'
import { NEXT_PUBLIC_STRIPE_KEY } from '@/env'
import StripePayment from '@/components/payment/StripePayment'
import { useMutation } from '@apollo/client'
import { STRIPE_PAYMENT_INTENT } from '@/gql/queries/otherQueries'
import { useNotifications } from '@/hooks/useNotifications'

const PaymentPage: NextPage = () => {
  const { showError } = useNotifications()
  const { register, handleSubmit } = useForm()
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'braintree' | undefined>()
  const [stripeClientSecret, setStripeClientSecret] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const [createPaymentIntent] = useMutation(STRIPE_PAYMENT_INTENT)
  const changePaymentMethod = async (method: 'stripe' | 'braintree') => {
    if (method === 'braintree') {
      setPaymentMethod('braintree')
      return
    }
    if (stripeClientSecret) {
      setPaymentMethod('stripe')
      return
    }

    setLoading(true)
    const { data, errors } = await createPaymentIntent()
    if (errors) {
      showError(errors.at(0))
      return
    }
    if (data?.createStripePaymentIntent) {
      setStripeClientSecret(data.createStripePaymentIntent)
      setPaymentMethod('stripe')
    }

    setLoading(false)
  }

  const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_KEY)
  return (
    <MainLayout withoutBackground>
      <Title order={3} my='md'>
        PAYMENT
      </Title>

      <Box className='w-full grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-8'>
        <Paper p='xl' color='white' radius={0} shadow='md' className='lg:col-span-3'>
          <Title order={3}>Select your payment method</Title>
          <Box mt='lg' className='col-span-2 flex gap-4'>
            <Paper
              onClick={() => changePaymentMethod('stripe')}
              className='w-1/3 xl:w-[20%] grid place-items-center'
              p='md'
              radius={0}
              sx={(theme) => ({ borderStyle: 'solid', borderWidth: '1px', borderColor: paymentMethod === 'stripe' ? theme.colors.brand : theme.colors.gray.at(3), cursor: 'pointer' })}
            >
              <Image className='w-10/12' src='/img/stripe.png' />
            </Paper>
            <Paper
              onClick={() => changePaymentMethod('braintree')}
              className='w-1/3 xl:w-[20%] grid place-items-center'
              p='md'
              radius={0}
              sx={(theme) => ({ borderStyle: 'solid', borderWidth: '1px', borderColor: paymentMethod === 'braintree' ? theme.colors.brand : theme.colors.gray.at(3), cursor: 'pointer' })}
            >
              <Image className='w-10/12' src='/img/paypal.png' />
            </Paper>
          </Box>
          <Paper mt='xl' p={0} radius={0} className='bg-gray-50 h-[20rem] grid place-items-center relative w-full'>
            <LoadingOverlay visible={loading} />
            {paymentMethod === 'stripe' ? (
              <Elements stripe={stripePromise} options={{ clientSecret: stripeClientSecret }}>
                <StripePayment />
              </Elements>
            ) : (
              <div></div>
            )}
          </Paper>
        </Paper>
        <Paper p='lg' color='white' radius={0} shadow='md' className='lg:col-span-2'>
          <OrderSummary />
        </Paper>
      </Box>
    </MainLayout>
  )
}

export default PaymentPage
