import { Accordion, Box, List, Text, ThemeIcon, Title } from '@mantine/core'
import React, { FC } from 'react'
import { Check } from 'tabler-icons-react'
import DeliverySteps from '../core/DeliverySteps'

type Props = {
  name: string
}

const ProductOverviewSection: FC<Props> = ({ name }) => {
  return (
    <Accordion radius={0} variant='separated'>
      <Accordion.Item value='product-overview'>
        <Accordion.Control>Overview</Accordion.Control>
        <Accordion.Panel className='text-sm'>
          <Text mt='lg' className='uppercase font-medium'>
            BUY {name}
            <a href='#' className='underline'>
              INNOVATIVE RANGE OF RETAIL PRODUCTS
            </a>
          </Text>
          <Text mt='xl'>Your PRODUCT CODE will be sent to your E-MAIL after your purchase.</Text>
          <Box>
            <DeliverySteps />
          </Box>
          <Box mt='xl' className='font-medium'>
            <Text>Installing is easy - SIMPLY BUY, DOWNLOAD, INSTALL then ACTIVATE! This is a stand-alone product so no monthly fees or additional subscriptions to pay! ONE-TIME PURCHASE!</Text>
          </Box>
          <Title mt='xl' order={5}>
            We will Email :
          </Title>
          <List
            size='sm'
            mt='lg'
            spacing='md'
            icon={
              <ThemeIcon radius='xl' color='teal' size={20}>
                <Check size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>LICENSE KEY: Official software product code.</List.Item>
            <List.Item>SOFTWARE DOWNLOAD: Direct link to download and redeem from the official manufacturers’ website.</List.Item>
            <List.Item>INSTRUCTIONS: Step-by-step installation guide (with Free installation support).</List.Item>
            <List.Item>ACTIVATION: Activate your digital product using the official activation wizard by code.</List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export default ProductOverviewSection
