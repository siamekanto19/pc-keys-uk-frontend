import { useNotifications } from '@/hooks/useNotifications'
import { cartStore } from '@/store/CartStore'
import { formatPrice } from '@/utils/FormatPrice'
import { Button } from '@mantine/core'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreditCard } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'

const StripePayment = () => {
  const { total } = useSnapshot(cartStore)
  const [loading, setLoading] = useState(false)
  const { showError } = useNotifications()
  const stripe = useStripe()
  const elements = useElements()
  const { handleSubmit } = useForm()
  const handlePayment = async () => {
    if (!stripe || !elements) return null
    setLoading(true)
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: location.origin + '/checkout/confirmation',
      },
    })
    if (result.error) {
      showError(result.error)
    }
    setLoading(false)
  }

  if (!stripe) return null

  return (
    <div className='w-11/12 md:w-10/12 mx-auto'>
      <PaymentElement className='!w-full' />
      <Button onClick={handlePayment} loading={loading} mt='lg' size='md' color='indigo' leftIcon={<CreditCard />} fullWidth>
        Pay {formatPrice(total)}
      </Button>
    </div>
  )
}

export default StripePayment
