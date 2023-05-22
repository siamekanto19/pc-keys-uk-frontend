import React, { FC } from 'react'
import { Maybe } from '@/gql/generated/graphql'
import { TypographyStylesProvider } from '@mantine/core'

type Props = {
  data?: Maybe<string>
}

const RichText: FC<Props> = ({ data }) => {
  if (!data) return null
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </TypographyStylesProvider>
  )
}

export default RichText
