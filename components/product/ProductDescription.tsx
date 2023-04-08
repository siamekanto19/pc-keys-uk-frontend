import { TypographyStylesProvider } from '@mantine/core'
import React, { FC } from 'react'

type Props = {
  description: string
}

const ProductDescription: FC<Props> = ({ description }) => {
  return (
    <TypographyStylesProvider py='lg'>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </TypographyStylesProvider>
  )
}

export default ProductDescription
