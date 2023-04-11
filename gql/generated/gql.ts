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
    "\n  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {\n    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n": types.AddItemToOrderDocument,
    "\n  mutation RemoveOrderLine($orderLineId: ID!) {\n    removeOrderLine(orderLineId: $orderLineId) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n": types.RemoveOrderLineDocument,
    "\n  query Products {\n    products {\n      items {\n        slug\n        id\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  query Product($slug: String) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      createdAt\n      customFields {\n        isFeatured\n        metaDescription\n        metaKeywords\n        metaTitle\n        newUntil\n        oldPrice\n        shortDescription\n        weight\n        relatedProducts {\n          name\n          slug\n          id\n          featuredAsset {\n            id\n            source\n            mimeType\n            name\n          }\n        }\n      }\n      featuredAsset {\n        id\n        source\n        mimeType\n        name\n      }\n      description\n      variants {\n        price\n        sku\n        name\n        id\n      }\n    }\n  }\n": types.ProductDocument,
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
export function graphql(source: "\n  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {\n    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {\n    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveOrderLine($orderLineId: ID!) {\n    removeOrderLine(orderLineId: $orderLineId) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveOrderLine($orderLineId: ID!) {\n    removeOrderLine(orderLineId: $orderLineId) {\n      ... on Order {\n        lines {\n          createdAt\n          id\n          productVariant {\n            sku\n            name\n            price\n            id\n            product {\n              name\n              slug\n              featuredAsset {\n                source\n                type\n                id\n                name\n              }\n            }\n          }\n          unitPrice\n          quantity\n          linePrice\n        }\n        total\n        subTotal\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products {\n    products {\n      items {\n        slug\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Products {\n    products {\n      items {\n        slug\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Product($slug: String) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      createdAt\n      customFields {\n        isFeatured\n        metaDescription\n        metaKeywords\n        metaTitle\n        newUntil\n        oldPrice\n        shortDescription\n        weight\n        relatedProducts {\n          name\n          slug\n          id\n          featuredAsset {\n            id\n            source\n            mimeType\n            name\n          }\n        }\n      }\n      featuredAsset {\n        id\n        source\n        mimeType\n        name\n      }\n      description\n      variants {\n        price\n        sku\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Product($slug: String) {\n    product(slug: $slug) {\n      id\n      name\n      slug\n      createdAt\n      customFields {\n        isFeatured\n        metaDescription\n        metaKeywords\n        metaTitle\n        newUntil\n        oldPrice\n        shortDescription\n        weight\n        relatedProducts {\n          name\n          slug\n          id\n          featuredAsset {\n            id\n            source\n            mimeType\n            name\n          }\n        }\n      }\n      featuredAsset {\n        id\n        source\n        mimeType\n        name\n      }\n      description\n      variants {\n        price\n        sku\n        name\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;