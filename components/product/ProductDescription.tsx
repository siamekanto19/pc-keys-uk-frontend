import { TypographyStylesProvider } from '@mantine/core'
import React, { FC } from 'react'
import RichText from '../core/RichText'

type Props = {
  description: string
}

const ProductDescription: FC<Props> = ({ description }) => {
  return (
    <TypographyStylesProvider py='lg'>
      <RichText blocks={description} />
    </TypographyStylesProvider>
  )
}

export default ProductDescription
