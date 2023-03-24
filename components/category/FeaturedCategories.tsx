import { Box, Button, Flex, Image, Title } from '@mantine/core'
import React from 'react'

const FeaturedCategories = () => {
  return (
    <Box className='grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16'>
      <CategoryEntry />
      <CategoryEntry />
      <CategoryEntry />
    </Box>
  )
}

const CategoryEntry = () => {
  return (
    <Flex direction='column' gap='xs' align='center'>
      <Title order={4} className='italic font-light text-gray-500'>
        SQL 2019
      </Title>
      <Title order={2}>Database Management</Title>
      <Image src='/img/sql.png' />
      <a href='#'>
        <Button mt='lg' size='lg' radius={0} variant='filled' color='brand'>
          Buy SQL Server
        </Button>
      </a>
    </Flex>
  )
}

export default FeaturedCategories
