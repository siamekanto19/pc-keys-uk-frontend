import AccountLayout from '@/components/layout/AccountLayout'
import CustomerAllOrders from '@/components/order/CustomerAllOrders'
import React from 'react'

const OrdersPage = () => {
  return (
    <AccountLayout>
      <CustomerAllOrders />
    </AccountLayout>
  )
}

export default OrdersPage
