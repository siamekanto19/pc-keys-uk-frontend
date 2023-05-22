import FeaturedCategories from '@/components/category/FeaturedCategories'
import FeaturedCategoryWithProducts from '@/components/category/FeaturedCategoryWithProducts'
import AboutCompany from '@/components/core/AboutCompany'
import MainLayout from '@/components/layout/MainLayout'
import FeaturedProducts from '@/components/product/FeaturedProducts'
import ProductCarousel from '@/components/product/ProductCarousel'
import { Box, Title, Text } from '@mantine/core'
import { NextPage } from 'next'
import React from 'react'

const IndexPage: NextPage = () => {
  return (
    <MainLayout>
      <Box className='p-6 lg:p-10'>
        <Box>
          <Title order={2} align='center'>
            Buy Microsoft Office 2019 and Windows 10 software. Low price at PC Keys
          </Title>
          <Text mt='md'>
            Buy from leading online retailer of software in the UK. Buy Office and Windows products at low prices. Massive range of software for Windows or your MAC at highly competitive prices is our
            offering and we stock over 200 different variations of the commonly used software used in the high street but at excellent online prices. We have an excellent and knowledgeable customer
            service specialists with unrivaled product knowledge to handle all of your queries whether you are a consumer, re-seller, business, or enterprise - We are here to help. You are sure to
            find that essential something which you have been searching for. Technology is our business - We aim to please! See how to get Windows 10 Professional Free when you buy selected software
            today.
          </Text>
        </Box>
        <Box mt='lg'>
          <FeaturedCategoryWithProducts />
        </Box>
        <Box>
          <Text mt='lg'>
            PCKey’s one of Europe’s leading suppliers of IT software, hardware and service solutions to individuals, corporations, business and public sector organisations, including those working in
            healthcare, education and local government agencies. Our collective knowledge & experience spans over twenty years and is further strengthened by our specialist departments, expertise,
            dedicated customer service and our free technical support. Our IT portfolio includes many competitively priced products, such as desktop operating system software, server operating
            systems, diagramming software, database software, project management, programming, everyday productivity software and drawing software both for Windows operating systems and also Apple
            Mac’s OS X. We are supported by an array of vendor recommendations as well as a far-reaching supply chain ensuring we are one of your most trusted IT providers.
          </Text>
        </Box>
        <Box mt='lg'>
          <Title order={2} className='uppercase'>
            Computer Security Products
          </Title>
          <div className='w-full h-[4px] bg-red-500 block mt-1'></div>
          <ProductCarousel />
        </Box>
        <Box mt='lg'>
          <Text>
            Some of our software products are redeemable on the official manufacturers install site or the activation portal available within the software’s own activation procedure. Once installed
            you can update the product for any enhancements or security features which need updated. Accompanied with your software are detailed installation guides, installation videos where possible
            as well as access to our helpful support free of cost. We endeavor to provide an effortless experience for the end user so that installing and purchasing your software is as easy as 1, 2,
            3. Having had decades of experience within IT – we aim to make it as easy as possible for you to use our products.
          </Text>
        </Box>
        <Box mt='lg'>
          <Title order={2} className='uppercase'>
            Client Access Licenses (CAL)
          </Title>
          <div className='w-full h-[4px] bg-red-500 block mt-1'></div>
          <ProductCarousel />
        </Box>
        <Box mt='lg'>
          <Text>
            PCKey’s one of Europe’s leading suppliers of IT software, hardware and service solutions to individuals, corporations, business and public sector organisations, including those working in
            healthcare, education and local government agencies. Our collective knowledge & experience spans over twenty years and is further strengthened by our specialist departments, expertise,
            dedicated customer service and our free technical support. Our IT portfolio includes many competitively priced products, such as desktop operating system software, server operating
            systems, diagramming software, database software, project management, programming, everyday productivity software and drawing software both for Windows operating systems and also Apple
            Mac’s OS X. We are supported by an array of vendor recommendations as well as a far-reaching supply chain ensuring we are one of your most trusted IT providers.
          </Text>
        </Box>
        <Box mt='lg'>
          <FeaturedCategories />
        </Box>
        <Box mt='lg'>
          <Text>
            Our aims are to deliver the latest software at low cost prices. We strive to enhance and improve your software needs and we want you to join us on your journey in a highly competitive
            market. We would like to say a big THANK YOU for choosing to shop with us in the past and we hope that we can continue to serve you in the future. Proudly we to offer its software and
            licenses at hugely competitive prices, having customers globally as well as serving many different industries, businesses and consumers in UK/Europe/Worldwide. We have vast experience in
            assisting all your licensing needs. You are in the best place to be for the widest range of computer software at the best prices available online. You will find everything you need for
            your PC build, notebook, laptop, MacBook/MAC or even additional software to use at work. You can browse our full selection of software using the categories at the top.
          </Text>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default IndexPage
