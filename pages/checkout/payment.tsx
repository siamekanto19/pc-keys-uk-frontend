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

  const createOrder = async (body: Pick<OrderInput, 'order_id' | 'transaction_id'>) => {
    try {
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
            order_id: body.order_id,
            transaction_id: body.transaction_id,
            total_price: cartTotal,
            customer_type: Enum_Order_Customer_Type.Guest,
            payment_method: Enum_Order_Payment_Method.Paypal,
            shipping_info: shippingAddress,
            line_items: items.map((item) => ({
              name: item.name,
              quantity: item.quantity,
              product_variant: item.id,
            })),
          },
        },
      })
      showSuccess('Your order has been placed')
    } catch (error) {
      showError(error)
    }
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
                  return actions.order?.capture().then((body) => {
                    createOrder({ order_id: data.orderID, transaction_id: data.orderID })
                  })
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
