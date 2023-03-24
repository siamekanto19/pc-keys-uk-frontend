import { Paper, Text } from '@mantine/core'
import React from 'react'

const HeaderCategoryList = () => {
  return (
    <Paper sx={(theme) => ({ background: theme.colors.gray.at(9) })} className='grid grid-flow-row grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10'>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Home</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Security</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Office 2019</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Mac</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Office 2016</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Windows 8</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Windows 10</Text>
      </Paper>
      <Paper radius={0} sx={(theme) => ({ background: theme.colors.gray.at(9), '&:hover': { background: theme.colors.gray.at(8) } })} className='text-center' p='xs'>
        <Text className='text-xs font-medium text-yellow-400 cursor-pointer'>Windows 11</Text>
      </Paper>
    </Paper>
  )
}

export default HeaderCategoryList
