import React, { FC, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { Box, Button, Title } from '@mantine/core'
import ProductCarousel from '../product/ProductCarousel'
import { ComponentHomeFeaturedCollectionTabs, Maybe } from '@/gql/generated/graphql'
import RichText from '../core/RichText'

type Props = {
  data?: Maybe<ComponentHomeFeaturedCollectionTabs>
}

const FeaturedCategoryWithProducts: FC<Props> = ({ data }) => {
  if (!data) return null
  return (
    <Box>
      <Tab.Group>
        <Box className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          <Title order={3}>{data.title}</Title>
          <Tab.List as='div' className='flex flex-wrap items-center gap-2'>
            {data.collections?.data.map((collection) => (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                    {collection.attributes?.name}
                  </Button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </Box>
        <div className='h-[4px] bg-[var(--mantine-color-brand-0)] w-full block'></div>
        <Tab.Panels className='mt-4'>
          {data.collections?.data.map((collection) => (
            <Tab.Panel key={collection.id}>
              <ProductCarousel products={collection.attributes?.products?.data} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Box>
        <RichText blocks={data.content} />
      </Box>
    </Box>
  )
}

export default FeaturedCategoryWithProducts
