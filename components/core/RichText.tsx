import React, { FC } from 'react'
import Blocks from 'editorjs-blocks-react-renderer'
import { Maybe } from '@/gql/generated/graphql'

type Props = {
  blocks?: Maybe<string>
}

const RichText: FC<Props> = ({ blocks }) => {
  if (!blocks) return null
  return <Blocks data={JSON.parse(blocks)} />
}

export default RichText
