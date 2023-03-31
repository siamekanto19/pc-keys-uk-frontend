import AccountLayout from '@/components/layout/AccountLayout'
import { Box, Flex, Title, Text, Button, Paper } from '@mantine/core'
import { NextPage } from 'next'
import React from 'react'

const UserAccountPage: NextPage = () => {
  return (
    <AccountLayout>
      <Paper shadow='sm' p='xl' radius={0}>
        <Title order={2}>My Account</Title>
        <Title order={3} mt={50} className='font-medium'>
          Account Information
        </Title>
        <hr />
        <Box className='flex flex-col lg:flex-row justify-between gap-5 mt-6'>
          <Flex direction='column'>
            <Title order={4}>Contact Information</Title>
            <Text mt='sm'>John Doe</Text>
            <Text>johdoe@gmail.com</Text>
            <Flex mt='sm' gap='md'>
              <Button variant='filled' radius={0} size='xs'>
                Edit
              </Button>
              <Button variant='filled' radius={0} size='xs'>
                Change Password
              </Button>
            </Flex>
          </Flex>
          <Flex direction='column'>
            <Title order={4}>Newsletters</Title>
            <Text mt='sm'>You are not subscribed to our Newsletter</Text>
            <Button className='w-20' mt='sm' variant='filled' radius={0} size='xs'>
              Edit
            </Button>
          </Flex>
        </Box>
        <Flex gap='md' mt={75} align='center'>
          <Title order={3} className='font-medium'>
            Address Book
          </Title>
          <Button color='red' variant='subtle'>
            Manage Addresses
          </Button>
        </Flex>
        <hr />
        <Box className='flex flex-col lg:flex-row justify-between gap-5 mt-6 mb-24'>
          <Flex direction='column'>
            <Title order={4}>Billing Address</Title>
            <Text mt='sm'>You have not set a default billing address</Text>
            <Button className='w-28' variant='filled' radius={0} size='xs' mt='sm'>
              Edit Address
            </Button>
          </Flex>
          <Flex direction='column'>
            <Title order={4}>Default Shipping Address</Title>
            <Text mt='sm'>You have not set a default shipping address</Text>
            <Button className='w-28' mt='sm' variant='filled' radius={0} size='xs'>
              Edit Address
            </Button>
          </Flex>
        </Box>
      </Paper>
    </AccountLayout>
  )
}

export default UserAccountPage
