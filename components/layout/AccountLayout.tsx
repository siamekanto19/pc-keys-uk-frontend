import { Box } from '@mantine/core'
import React, { FC } from 'react'
import AccountSideNavigation from '../account/AccountSideNavigation'
import MainLayout from './MainLayout'

type Props = {
  children: any
}

const AccountLayout: FC<Props> = ({ children }) => {
  return (
    <MainLayout withoutBackground>
      <Box className='w-full grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-8'>
        <Box className='md:col-span-1'>
          <AccountSideNavigation />
        </Box>
        <Box className='md:col-span-3'>{children}</Box>
      </Box>
    </MainLayout>
  )
}

export default AccountLayout
