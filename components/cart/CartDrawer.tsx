import { closeCart, LayoutStore } from '@/store'
import { ActionIcon, Drawer, Flex, Paper, Title, Text, Box, Button } from '@mantine/core'
import React from 'react'
import { X } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'
import CartOrderLines from './CartOrderLines'
import { cartStore } from '@/store/CartStore'
import { formatPrice } from '@/utils/FormatPrice'
import { useRouter } from 'next/router'

const CartDrawer = () => {
  const { isCartOpen } = useSnapshot(LayoutStore)
  const router = useRouter()
  const { total } = useSnapshot(cartStore)
  const goToCheckout = () => {
    closeCart()
    router.push('/checkout')
  }
  return (
    <Drawer position='right' opened={isCartOpen} onClose={closeCart} size='md' withCloseButton={false} padding={0}>
      <Paper py='md' px='xl' radius={0} className='flex justify-between items-center sticky top-0'>
        <Title order={4}>Your Cart</Title>
        <ActionIcon onClick={closeCart} size='md'>
          <X />
        </ActionIcon>
      </Paper>
      <CartOrderLines />
      <Box className='fixed bottom-0 w-full'>
        <Paper radius={0} p='md' className='bg-gray-200 flex flex-col gap-y-4'>
          <Flex justify='space-between' className='font-semibold text-lg'>
            <Text>Cart Subtotal</Text>
            <Text>{formatPrice(total)}</Text>
          </Flex>
        </Paper>
        <Button onClick={goToCheckout} size='lg' fullWidth radius={0}>
          Checkout
        </Button>
      </Box>
    </Drawer>
  )
}

export default CartDrawer
