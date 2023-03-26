import { ActionIcon, Box, Button, Flex, Image, Paper, Text } from '@mantine/core'
import React, { FC, Fragment, useState } from 'react'
import { Eye } from 'tabler-icons-react'
import ProductQuickView from './ProductQuickView'

type Props = {
  withBorder?: boolean
}

const ProductCard: FC<Props> = ({ withBorder }) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  return (
    <Fragment>
      <ProductQuickView isOpen={quickViewOpen} onClose={() => setQuickViewOpen(false)} />
      <Paper className='relative hover:shadow-md' withBorder={withBorder} radius={0} p='md'>
        <Box p='sm' className='relative group'>
          <ActionIcon
            onClick={() => setQuickViewOpen(true)}
            sx={(theme) => ({ background: theme.colors.yellow.at(7) })}
            className='absolute top-[40%] left-[40%] z-20 shadow-lg hidden group-hover:grid'
            variant='filled'
            size='lg'
            radius={0}
          >
            <Eye />
          </ActionIcon>
          <Image src='/img/norton.jpg' />
        </Box>
        <a href='#'>
          <Text mt='sm' className='uppercase hover:text-[var(--mantine-color-brand-0)] text-sm'>
            Norton 360 Premium Internet and Device Security with VPN & Password Manager 2023 Digital License
          </Text>
        </a>
        <Flex align='center' gap='sm'>
          <Text className='text-lg font-medium text-red-500 line-through'>£50</Text>
          <Text className='text-lg font-medium'>£50</Text>
        </Flex>
        <Button className='uppercase' radius={0} color='yellow' mt='xl' variant='filled' size='sm' fullWidth>
          Add To Cart
        </Button>
      </Paper>
    </Fragment>
  )
}

export default ProductCard
