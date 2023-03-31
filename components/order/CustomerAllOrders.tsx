import { Button, Flex, Paper, Text } from '@mantine/core'
import React from 'react'
import { Eye } from 'tabler-icons-react'

const DATA = [
  {
    number: 845,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
  {
    number: 345,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
  {
    number: 349,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
  {
    number: 253,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
  {
    number: 975,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
  {
    number: 123,
    date: Date.now(),
    status: 'COMPLETED',
    total: 34,
    items: 3,
  },
]

const CustomerAllOrders = () => {
  return (
    <Paper p={0} radius={0} shadow='sm'>
      <Paper sx={{ overflowX: 'auto' }} py='sm' radius={0} px='md' className='grid grid-flow-row grid-cols-5 gap-4 bg-gray-200'>
        <Text className='font-medium'>Order</Text>
        <Text className='font-medium'>Date</Text>
        <Text className='font-medium'>Status</Text>
        <Text className='font-medium'>Total</Text>
        <Text className='font-medium'>Actions</Text>
      </Paper>
      {DATA.map((data) => (
        <Paper sx={{ overflowX: 'auto' }} withBorder py='lg' key={data.number} radius={0} px='md' className='grid grid-flow-row grid-cols-5 gap-4 text-sm !border-b-0'>
          <Text className='text-[var(--mantine-color-brand-0)]'>#{data.number}</Text>
          <Text>{new Date(data.date).toLocaleDateString()}</Text>
          <Text>{data.status}</Text>
          <Text>
            ${data.total} for {data.items} Items
          </Text>
          <Button rightIcon={<Eye size={14} />} size='xs' radius={0} color='gray'>
            View
          </Button>
        </Paper>
      ))}
    </Paper>
  )
}

export default CustomerAllOrders
