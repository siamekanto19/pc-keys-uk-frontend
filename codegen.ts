import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://cms.pckeys.uk/web/index.php?p=admin/actions/graphql/api': {
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
