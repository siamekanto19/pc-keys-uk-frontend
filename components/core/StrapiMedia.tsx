import { Maybe, UploadFileEntity, UploadFileEntityResponse } from '@/gql/generated/graphql'
import { Image, ImageProps } from '@mantine/core'
import React, { FC } from 'react'

type Props = Omit<ImageProps, 'src'> & {
  data?: Maybe<UploadFileEntityResponse>
}

const hostPrefix = 'https://build.pckeys.uk'

const StrapiMedia: FC<Props> = (props) => {
  if (!props.data) return null
  const imageData = props.data.data
  return <Image src={hostPrefix + imageData?.attributes?.url} alt={imageData?.attributes?.alternativeText ?? ''} {...props} />
}

export default StrapiMedia
