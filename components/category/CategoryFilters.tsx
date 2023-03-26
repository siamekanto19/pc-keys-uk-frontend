import { Flex, Paper, Title, Accordion, Checkbox, NumberInput, Button } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const CategoryFilters = () => {
  const router = useRouter()
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      min: router.query.min ? parseInt(router.query.min as string) : 1,
      max: router.query.max ? parseInt(router.query.max as string) : 1000,
    },
  })

  return (
    <Flex direction='column' gap='lg'>
      <Paper p={0} shadow='md' radius={0}>
        <Title order={4} px='md' pt='md'>
          SHOP BY
        </Title>
        <div className='h-px block w-full bg-gray-300 mt-3'></div>
        <Accordion p={0} radius={0} variant='default' multiple>
          <Accordion.Item className='text-sm' value='price'>
            <Accordion.Control className='text-sm'>PRICE</Accordion.Control>
            <Accordion.Panel>
              <form className='my-3' onSubmit={handleSubmit((values) => router.push({ query: values }))}>
                <Flex align='center' gap='md'>
                  <Controller
                    control={control}
                    name='min'
                    render={({ field: { onChange, value, name } }) => (
                      <NumberInput name={name} value={value} onChange={onChange} hideControls sx={{ label: { paddingBottom: 5 } }} label='Min' size='sm' radius={0} />
                    )}
                  />
                  <Controller
                    control={control}
                    name='max'
                    render={({ field: { onChange, value, name } }) => (
                      <NumberInput name={name} value={value} onChange={onChange} hideControls sx={{ label: { paddingBottom: 5 } }} label='Max' size='sm' radius={0} />
                    )}
                  />
                </Flex>
                <Button type='submit' radius={0} mt='md' fullWidth size='sm' color='brand'>
                  APPLY
                </Button>
              </form>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className='text-sm' value='stock'>
            <Accordion.Control className='text-sm'>STOCK STATUS</Accordion.Control>
            <Accordion.Panel>
              <Checkbox.Group
                className='flex flex-col gap-y-4 pt-2'
                onChange={(value) => router.push({ query: { stock: value } })}
                value={Array.isArray(router.query.stock) ? router.query.stock : router.query.stock ? [router.query.stock] : []}
              >
                <Checkbox color='brand' label='In Stock' value='in_stock' />
                <Checkbox color='brand' label='Out Of Stock' value='out_of_stock' />
              </Checkbox.Group>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Paper>
    </Flex>
  )
}

export default CategoryFilters
