import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { Box, Button, Title } from '@mantine/core'
import ProductCarousel from '../product/ProductCarousel'

const FeaturedCategoryWithProducts = () => {
  return (
    <Tab.Group>
      <Box className='flex flex-col lg:flex-row items-center justify-between gap-6'>
        <Title order={3}>Featured Categories</Title>
        <Tab.List as='div' className='flex flex-wrap items-center gap-2'>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                Windows 10
              </Button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                Windows 11
              </Button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                MacOS
              </Button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                Office 2019
              </Button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Button radius={0} size='md' sx={(theme) => ({ background: selected ? theme.colors.brand : theme.colors.gray.at(8) })}>
                Office 2020
              </Button>
            )}
          </Tab>
        </Tab.List>
      </Box>
      <div className='h-[4px] bg-[var(--mantine-color-brand-0)] w-full block'></div>
      <Tab.Panels className='mt-4'>
        <Tab.Panel>
          <ProductCarousel />
        </Tab.Panel>
        <Tab.Panel>
          <ProductCarousel />
        </Tab.Panel>
        <Tab.Panel>
          <ProductCarousel />
        </Tab.Panel>
        <Tab.Panel>
          <ProductCarousel />
        </Tab.Panel>
        <Tab.Panel>
          <ProductCarousel />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default FeaturedCategoryWithProducts
