/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Products {\n    products {\n      id\n      slug\n    }\n  }\n": types.ProductsDocument,
    "\n  query Product($slug: [String]) {\n    product(slug: $slug) {\n      enabled\n      id\n      title\n      slug\n      status\n      variants {\n        isAvailable\n        hasUnlimitedStock\n        enabled\n        id\n        isDefault\n        maxQty\n        minQty\n        price\n        slug\n        title\n        sku\n      }\n      ... on product_Product {\n        mainImage {\n          alt\n          uri\n          url\n          id\n        }\n        body\n        availableForPurchase\n      }\n    }\n  }\n": types.ProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products {\n    products {\n      id\n      slug\n    }\n  }\n"): (typeof documents)["\n  query Products {\n    products {\n      id\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Product($slug: [String]) {\n    product(slug: $slug) {\n      enabled\n      id\n      title\n      slug\n      status\n      variants {\n        isAvailable\n        hasUnlimitedStock\n        enabled\n        id\n        isDefault\n        maxQty\n        minQty\n        price\n        slug\n        title\n        sku\n      }\n      ... on product_Product {\n        mainImage {\n          alt\n          uri\n          url\n          id\n        }\n        body\n        availableForPurchase\n      }\n    }\n  }\n"): (typeof documents)["\n  query Product($slug: [String]) {\n    product(slug: $slug) {\n      enabled\n      id\n      title\n      slug\n      status\n      variants {\n        isAvailable\n        hasUnlimitedStock\n        enabled\n        id\n        isDefault\n        maxQty\n        minQty\n        price\n        slug\n        title\n        sku\n      }\n      ... on product_Product {\n        mainImage {\n          alt\n          uri\n          url\n          id\n        }\n        body\n        availableForPurchase\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;