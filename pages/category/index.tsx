import CategoryFilters from '@/components/category/CategoryFilters'
import MainLayout from '@/components/layout/MainLayout'
import ProductGrid from '@/components/product/ProductGrid'
import { Box, Flex, Pagination, Paper, Select, Text, Title } from '@mantine/core'
import React from 'react'
import { ArrowNarrowRight, ChevronDown } from 'tabler-icons-react'

const SingleCategoryPage = () => {
  return (
    <MainLayout withoutBackground>
      <Box py='sm' className='px-5 lg:px-0'>
        <Flex align='center' gap='xs' className='text-sm font-medium'>
          <Text>HOME</Text>
          <ArrowNarrowRight />
          <Text className='uppercase text-gray-500'>Office 2019</Text>
        </Flex>
        <Box mt='lg'>
          <Title order={3}>OFFICE 2019</Title>
          <Text className='text-sm' mt='lg'>
            Buy Microsoft Office 2021 retail software. It is the latest available office suite now available in 5 different variations – Standard, Professional, Student and Business Editions. Office
            2021 is a collaboration of offline/cloud-based applications that bring together the very best tools for the way people use for work and business today. By combining the best-in-class
            software applications such as Word, Excel and Outlook with powerful cloud services; Office lets anyone create and share anywhere on any device. Microsoft Office is a powerful tool that
            helps you unleash your best ideas, get things done, whilst maintaining connection on the move. You can also buy Office for MAC for your home, work or business. See how to get Windows 10
            Professional Free when you buy Office 2021 software today. <br />
            <br />
            Office 2021 is ever crucial to the constant and modern changing environment and is the current and latest release of the every present and infamous desktop software suite which is crucial
            for everyday tasks and more. Some applications which are available but not limited to include: Word 2021 - which is a fully-fledged word processing program for with endless features.
            <br />
            <br />
            Excel is a fully-fledged spreadsheet program that features calculations, graphic tools, pivot tables, macro programming with endless numerical features. PowerPoint 2021 is a fully-fledged
            presentation program providing endless possibilities to project all your ideas. OneNote 2021 is a fully-fledged free-form note-taking application with endless possibilities for notetaking.
            Outlook 2021 is arguably the best-in-class consumer/commercial/business email program with endless possibilities for email creation and management. Publisher 2021 is a fully-fledged
            desktop publishing application with endless possibilities for your publishing needs. Access 2021 is a fully-fledged database management solution with endless possibilities for database
            management. <br />
            <br />
            InfoPath is a fully-fledged electrical form creation and distribution solution with endless possibilities for form management. Skype for Business 2021 also assists for all your
            communication needs and to connect users quickly and efficient for meetings and much more. If you add in support and collaboration for Microsoft Teams and other recently innovative
            applications you have the best universally liked office software suite availble on this planet today.
          </Text>
        </Box>
        <Box mt={75} className='grid grid-flow-row grid-cols-1 lg:grid-cols-7 xl:grid-cols-8 gap-5'>
          <Box className='lg:col-span-2'>
            <CategoryFilters />
          </Box>
          <Flex direction='column' gap='lg' className='lg:col-span-5 xl:col-span-6'>
            <Paper p='md' shadow='md' radius={0} className='text-sm flex items-center justify-between'>
              <Text className='font-medium'>Items 1-20 of 21</Text>
              <Flex align='center' gap='md'>
                <Text className='font-medium'>Sort By</Text>
                <Select
                  classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0' }}
                  rightSection={<ChevronDown className='text-gray-400 h-5' />}
                  placeholder='Select One'
                  radius={0}
                  data={[
                    { label: 'Position', value: 'position' },
                    { label: 'Price', value: 'price' },
                  ]}
                />
              </Flex>
            </Paper>
            <ProductGrid />
            <Paper shadow='md' radius={0} p='md' className='flex items-center justify-between gap-x-4'>
              <Pagination total={3} radius={0} color='yellow' />
              <Flex align='center' gap='sm' className='text-sm font-medium'>
                <Text>Show</Text>
                <Select
                  radius={0}
                  classNames={{ item: '!rounded-none', dropdown: '!rounded-none p-0' }}
                  rightSection={<ChevronDown className='text-gray-400 h-5' />}
                  width={50}
                  value='10'
                  data={['10', '20', '30', '40']}
                />
                <Text>Per page</Text>
              </Flex>
            </Paper>
          </Flex>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default SingleCategoryPage
