import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://build.pckeys.uk/graphql': {
        headers: {},
      },
    },
  ],
  documents: ['./gql/queries/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './gql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
