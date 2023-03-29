import { closeAuthDrawer, LayoutStore } from '@/store'
import { ActionIcon, Button, Drawer, Flex, PasswordInput, TextInput } from '@mantine/core'
import React, { FC } from 'react'
import { X } from 'tabler-icons-react'
import { useSnapshot } from 'valtio'

const UserAuthDrawer: FC = () => {
  const { isAuthDrawerOpen } = useSnapshot(LayoutStore)
  return (
    <Drawer withCloseButton={false} padding='xl' size='sm' position='right' opened={isAuthDrawerOpen} onClose={closeAuthDrawer}>
      <Flex justify='end'>
        <ActionIcon onClick={closeAuthDrawer} variant='transparent'>
          <X />
        </ActionIcon>
      </Flex>
      <form className='w-full'>
        <TextInput classNames={{ label: 'mb-2' }} label='Email Address' radius={0} size='md' color='red' />
        <PasswordInput classNames={{ label: 'mb-2' }} label='Password' radius={0} size='md' mt='md' color='red' />
        <Button radius={0} color='brand' mt='xl' size='md' fullWidth>
          Sign In
        </Button>
      </form>
    </Drawer>
  )
}

export default UserAuthDrawer
