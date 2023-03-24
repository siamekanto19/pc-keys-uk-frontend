import { Box, Paper, Title, Text } from '@mantine/core'
import React from 'react'

const AboutCompany = () => {
  return (
    <Paper className='grid grid-flow-row grid-cols-1 lg:grid-cols-2' radius={0} p={0} sx={(theme) => ({ background: theme.colors.gray.at(3) })}>
      <Box p='xl' className='h-full'>
        <Title order={4}>About PC Keys</Title>
        <Text mt='sm' className='text-sm'>
          We love the work we do at PC Keys. We respect the industry. We admire the people we serve and meet. We like to talk IT. We want to share our knowledge and embrace the nerd in you. We are an
          international business and a diverse end-to-end IT solutions provider with a key focus on computer software and IT trends helping customers re-engineer and businesses to re-invent themselves
          to compete in this digital era. We ship to over 200 countries and regions worldwide with key support for the UK, USA, Europe, Australia and the Middle East. We are a British company based In
          London.
        </Text>
        <Text mt='sm' className='text-sm'>
          In the last 6 years; We have serviced countless thousands of buyers and end users. Our customers range from business owners, home users, government agencies, IT resellers, charities, and
          students. Having supplied to some big-name brands such as RBS, Mercedes, Ernst & Young, Barclays, CISCO, KPMG, JP Morgan, NHS, Brother, HSBC, Wetherspoons, Hilton, BlackRock, Morgan Stanley,
          HP, PwC, Vodafone, SKY, Santander Bank and more. We regularly supply IT companies globally as well as accountants, solicitors, financial establishments and more with our software solutions.
        </Text>
        <Text mt='sm' className='text-sm'>
          So whether you are searching for the newest desktop or server operating system, office suite, diagramming tools, project management, productivity suite, database management, server software
          or security software - PC Keys is the ultimate one-stop-shop for your modern yet economical day-to-day computing needs by providing up-to-date quality software products at appealing prices
          to every user in the world. We are here to solve the biggest problem in selecting software by priding ourselves in offering you software to cater your Windows or MAC that won’t break the
          bank.
        </Text>
      </Box>
      <Box p='xl' className='bg-[#4f70c2] flex flex-col h-full lg:flex-row items-start gap-8 text-white'>
        <Box>
          <Title order={4}>Who are we?</Title>
          <Text mt='lg' className='text-sm'>
            PC Keys is a site operated by Digital Point Ltd. We are registered in England and Wales under company number 12556846 and have our registered office at International House, 24 Holborn
            Viaduct, London, England, EC1A 2BN.
          </Text>
          <Text mt='lg' className='text-sm'>
            07946 666786 / 01444 300321
          </Text>
        </Box>
        <Box>
          <Title order={4}>Savings</Title>
          <Text mt='lg' className='text-sm'>
            We offer discounts for business, schools, solicitors, B2B, B2C and NHS employees. Contact us for more details.
          </Text>
          <Text mt='lg' className='text-sm'>
            If you are are a small business or start-up company, we would love to hear from you and discuss your requirements. We are specialists in saving you time and money with our great discounts
            and exclusive deals for over 15 years. Talk to us about your expansion or new office setup today. Save time searching – find all your computer products in one place.
          </Text>
        </Box>
      </Box>
    </Paper>
  )
}

export default AboutCompany
