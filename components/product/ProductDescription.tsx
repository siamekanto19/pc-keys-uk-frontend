import { TypographyStylesProvider } from '@mantine/core'
import React, { FC } from 'react'
import RichText from '../core/RichText'

type Props = {
  description?: string
}

const ProductDescription: FC<Props> = ({ description }) => {
  if (!description) return null
  return (
    <TypographyStylesProvider py='lg'>
      <RichText data={description} />
    </TypographyStylesProvider>
  )
}

export default ProductDescription
