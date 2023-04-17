import { closeCart, LayoutStore } from '@/store'
import { ActionIcon, Drawer, Flex, Paper, Title, Text, Box, Button } from '@mantine/core'
import React from 'react'
import { X } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'
import CartOrderLines from './CartOrderLines'
import { useRouter } from 'next/router'
import { useCart } from 'react-use-cart'

const CartDrawer = () => {
  const { isCartOpen } = useSnapshot(LayoutStore)
  const router = useRouter()
  const { isEmpty, cartTotal } = useCart()

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
      {!isEmpty && (
        <Box className='fixed bottom-0 w-full'>
          <Paper radius={0} p='md' className='bg-gray-200 flex flex-col gap-y-4'>
            <Flex justify='space-between' className='font-semibold text-lg'>
              <Text>Cart Subtotal</Text>
              <Text>£{cartTotal.toPrecision(5)}</Text>
            </Flex>
          </Paper>
          <Button onClick={goToCheckout} size='lg' fullWidth radius={0}>
            Checkout
          </Button>
        </Box>
      )}
    </Drawer>
  )
}

export default CartDrawer
