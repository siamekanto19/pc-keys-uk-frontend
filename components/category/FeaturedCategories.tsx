import { ComponentCoreCollectionCard, ComponentHomeFeaturedCollections, Maybe } from '@/gql/generated/graphql'
import { Box, Button, Flex, Image, Title } from '@mantine/core'
import React, { FC } from 'react'
import StrapiMedia from '../core/StrapiMedia'

type Props = {
  data?: Maybe<ComponentHomeFeaturedCollections>
}

const FeaturedCategories: FC<Props> = ({ data }) => {
  return (
    <Box className='grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16 mt-16'>
      {data?.cards?.map((card) => (
        <CategoryEntry key={card?.id} card={card} />
      ))}
    </Box>
  )
}

const CategoryEntry: FC<{ card: Maybe<ComponentCoreCollectionCard> }> = ({ card }) => {
  return (
    <Flex direction='column' gap='xs' align='center'>
      <Title order={4} className='italic font-light text-gray-500'>
        {card?.subtext}
      </Title>
      <Title order={2}>{card?.title}</Title>
      <StrapiMedia data={card?.image} />
      <a href={card?.button_href ?? '#'}>
        <Button mt='lg' size='lg' radius={0} variant='filled' color='brand'>
          {card?.button_text}
        </Button>
      </a>
    </Flex>
  )
}

export default FeaturedCategories
