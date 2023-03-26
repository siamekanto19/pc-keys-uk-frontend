import { Box, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import AboutCompany from '../core/AboutCompany'
import BrandLogo from '../core/BrandLogo'

const Footer = () => {
  return (
    <Box mt='xl'>
      <AboutCompany />
      <Paper px='xl' py={50} radius={0} className='bg-gray-800 text-white grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-4'>
        <Box className='flex flex-col gap-2'>
          <BrandLogo />
          <Text className='text-sm font-medium'>
            PC KEYS - 24 Holborn Viaduct, <br />
            London, England, EC1A 2BN <br />
            United Kingdom
          </Text>
        </Box>
        <Box className='flex flex-col gap-2'>
          <Title order={4}>PC Keys</Title>
          <Text className='text-sm'>About Us</Text>
          <Text className='text-sm'>Our Team</Text>
          <Text className='text-sm'>Business Terms</Text>
          <Text className='text-sm'>General Terms</Text>
        </Box>
        <Box className='flex flex-col gap-2'>
          <Title order={4}>Categories</Title>
          <Text className='text-sm'>About Us</Text>
          <Text className='text-sm'>Our Team</Text>
          <Text className='text-sm'>Business Terms</Text>
          <Text className='text-sm'>General Terms</Text>
        </Box>
        <Box className='flex flex-col gap-2'>
          <Title order={4}>More Categories</Title>
          <Text className='text-sm'>About Us</Text>
          <Text className='text-sm'>Our Team</Text>
          <Text className='text-sm'>Business Terms</Text>
          <Text className='text-sm'>General Terms</Text>
        </Box>
        <Box className='flex flex-col gap-2'>
          <Title order={4}>Information</Title>
          <Text className='text-sm'>About Us</Text>
          <Text className='text-sm'>Our Team</Text>
          <Text className='text-sm'>Business Terms</Text>
          <Text className='text-sm'>General Terms</Text>
        </Box>
      </Paper>
    </Box>
  )
}

export default Footer
