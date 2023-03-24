import { ActionIcon, Box, Flex, Paper } from '@mantine/core'
import React, { FC, Fragment, useState } from 'react'
import { Search, ShoppingBag, User } from 'tabler-icons-react'
import UserAuthDrawer from '../auth/UserAuthDrawer'
import HeaderCategoryList from '../category/HeaderCategoryList'
import BrandLogo from '../core/BrandLogo'
import GlobalSearch from '../core/GlobalSearch'
import HeaderSearchBar from '../core/HeaderSearchBar'
import Footer from './Footer'

type Props = {
  children: any
}

const MainLayout: FC<Props> = ({ children }) => {
  const [isAuthDrawerOpen, setIsAuthDrawerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <Fragment>
      <UserAuthDrawer isOpen={isAuthDrawerOpen} onClose={() => setIsAuthDrawerOpen(false)} />
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Box p={0} className='w-full lg:w-10/12 mx-auto lg:mt-4'>
        <Paper sx={(theme) => ({ background: theme.colors.brand })} radius={0} className='h-24 flex justify-between items-center' p='xl'>
          <BrandLogo />
          <HeaderSearchBar />
          <Box className='flex items-center gap-x-3 lg:gap-x-4'>
            <ActionIcon onClick={() => setIsSearchOpen(true)} variant='transparent'>
              <Search color='white' />
            </ActionIcon>
            <ActionIcon onClick={() => setIsAuthDrawerOpen(true)} variant='transparent'>
              <User color='white' />
            </ActionIcon>
            <ActionIcon variant='transparent'>
              <ShoppingBag color='white' />
            </ActionIcon>
          </Box>
        </Paper>
        <HeaderCategoryList />
        <Paper color='white' radius={0} mt='lg'>
          {children}
        </Paper>
      </Box>
      <Box mt='lg'>
        <Footer />
      </Box>
    </Fragment>
  )
}

export default MainLayout
