import { Button, clsx, Paper, Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ShoppingBag, User } from 'tabler-icons-react'

const AccountSideNavigation = () => {
  const router = useRouter()
  const isPath = (path: string) => {
    return router.pathname === path
  }
  return (
    <Paper shadow='md' radius={0} className='flex flex-col'>
      <Link href='/account'>
        <Paper p={0} className='text-center font-medium relative h-14' radius={0}>
          <div className={clsx('absolute left-0 h-14 bg-[var(--mantine-color-brand-0)] w-[5px] z-20', { visible: isPath('/account'), invisible: !isPath('/account') })}></div>
          <div className={clsx('w-full h-14 border-l-2 flex justify-center items-center gap-x-3 relative hover:bg-gray-100', { 'text-[var(--mantine-color-brand-0)]': isPath('/account') })}>
            <User />
            My Account
          </div>
        </Paper>
      </Link>

      <Link href='/account/orders'>
        <Paper p={0} className='text-center font-medium relative h-14' radius={0}>
          <div className={clsx('absolute left-0 h-14 bg-[var(--mantine-color-brand-0)] w-[5px] z-20', { visible: isPath('/account/orders'), invisible: !isPath('/account/orders') })}></div>
          <div className={clsx('w-full h-14 border-l-2 flex justify-center items-center gap-x-3 relative hover:bg-gray-100', { 'text-[var(--mantine-color-brand-0)]': isPath('/account/orders') })}>
            <ShoppingBag />
            My Orders
          </div>
        </Paper>
      </Link>
    </Paper>
  )
}

export default AccountSideNavigation
