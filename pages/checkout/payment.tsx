import MainLayout from '@/components/layout/MainLayout'
import OrderSummary from '@/components/order/OrderSummary'
import { Box, LoadingOverlay, Paper, Title } from '@mantine/core'
import { NextPage } from 'next/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useNotifications } from '@/hooks/useNotifications'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { NEXT_PUBLIC_PAYPAL_CLIENT_ID } from '@/env'
import { useCart } from 'react-use-cart'
import { Enum_Order_Customer_Type, Enum_Order_Payment_Method, OrderInput } from '@/gql/generated/graphql'
import { CREATE_ORDER } from '@/gql/queries/orderQueries'
import { useSnapshot } from 'valtio'
import { checkoutStore } from '@/store/checkoutStore'

const PaymentPage: NextPage = () => {
  const { cartTotal, items } = useCart()
  const { showError, showSuccess } = useNotifications()
  const { shippingAddress } = useSnapshot(checkoutStore)
  const [paymentMethod, setPaymentMethod] = useState<'PAYPAL' | 'STRIPE'>('PAYPAL')
  const [mutate, { loading, error }] = useMutation(CREATE_ORDER)
  const createOrder = async (body: Pick<OrderInput, 'payment_intent'>) => {
    await mutate({
      variables: {
        data: {
          first_name: shippingAddress.first_name,
          last_name: shippingAddress.last_name,
          email: shippingAddress.email,
          order_details: {
            products: items.map((item) => ({
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            total: cartTotal.toPrecision(5),
          },
          payment_intent: body.payment_intent,
          transaction_id: body.payment_intent,
          total_price: cartTotal,
          customer_type: Enum_Order_Customer_Type.Guest,
          payment_method: Enum_Order_Payment_Method.Paypal,
          shipping_info: shippingAddress,
        },
      },
    })
    if (error) {
      showError(error)
    }
    showSuccess('Your order has been placed')
  }

  return (
    <MainLayout withoutBackground>
      <Title order={3} my='md'>
        PAYMENT
      </Title>

      <Box className='w-full grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-8'>
        <Paper p='xl' color='white' radius={0} shadow='md' className='lg:col-span-3'>
          <Title order={3}>Select your payment method</Title>
          <Box className='relative' mt={40} px='xl'>
            <LoadingOverlay visible={loading} />
            <PayPalScriptProvider options={{ 'client-id': NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'GBP' }}>
              <PayPalButtons
                forceReRender={[cartTotal]}
                createOrder={(data, actions) => {
                  return actions.order
                    .create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: 'GBP',
                            value: cartTotal.toPrecision(5),
                          },
                        },
                      ],
                    })
                    .then((orderId) => orderId)
                }}
                onApprove={async (data, actions) => {
                  return actions.order?.capture().then((body) => createOrder({ payment_intent: body.id }))
                }}
                style={{ layout: 'vertical' }}
              />
            </PayPalScriptProvider>
          </Box>
        </Paper>
        <Paper p='lg' color='white' radius={0} shadow='md' className='lg:col-span-2'>
          <OrderSummary />
        </Paper>
      </Box>
    </MainLayout>
  )
}

export default PaymentPage
