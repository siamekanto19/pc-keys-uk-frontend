import { closeCart, LayoutStore } from '@/store'
import { ActionIcon, Box, Button, Drawer, Flex, Paper, Title } from '@mantine/core'
import React from 'react'
import { X } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'

const CartDrawer = () => {
  const { isCartOpen } = useSnapshot(LayoutStore)

  return (
    <Drawer position='right' opened={isCartOpen} onClose={closeCart} size='sm' withCloseButton={false} padding={0}>
      <Paper py='md' px='lg' radius={0} className='flex justify-between items-center sticky top-0'>
        <Title order={4}>Your Cart</Title>
        <ActionIcon onClick={closeCart} size='md'>
          <X />
        </ActionIcon>
      </Paper>
      <Flex direction='column' gap='lg' px='lg' mt={100}>
        <Title align='center' order={5} className='font-medium'>
          There is no item in your cart
        </Title>
        <Button onClick={closeCart} radius={0} size='sm' fullWidth>
          Continue Shopping
        </Button>
      </Flex>
    </Drawer>
  )
}

export default CartDrawer
