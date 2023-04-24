/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  HomepageBodyDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  zip_code?: Maybe<Scalars['String']>;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  attributes?: Maybe<Address>;
  id?: Maybe<Scalars['ID']>;
};

export type AddressEntityResponse = {
  __typename?: 'AddressEntityResponse';
  data?: Maybe<AddressEntity>;
};

export type AddressEntityResponseCollection = {
  __typename?: 'AddressEntityResponseCollection';
  data: Array<AddressEntity>;
  meta: ResponseCollectionMeta;
};

export type AddressFiltersInput = {
  address_line_1?: InputMaybe<StringFilterInput>;
  address_line_2?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  company_name?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>;
  phone_number?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  zip_code?: InputMaybe<StringFilterInput>;
};

export type AddressInput = {
  address_line_1?: InputMaybe<Scalars['String']>;
  address_line_2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  state?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
  zip_code?: InputMaybe<Scalars['String']>;
};

export type AddressRelationResponseCollection = {
  __typename?: 'AddressRelationResponseCollection';
  data: Array<AddressEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  feature_image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  sub_collections?: Maybe<CollectionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CollectionSub_CollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CollectionEntity = {
  __typename?: 'CollectionEntity';
  attributes?: Maybe<Collection>;
  id?: Maybe<Scalars['ID']>;
};

export type CollectionEntityResponse = {
  __typename?: 'CollectionEntityResponse';
  data?: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  __typename?: 'CollectionEntityResponseCollection';
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  sub_collections?: InputMaybe<CollectionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  description?: InputMaybe<Scalars['String']>;
  feature_image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  sub_collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CollectionRelationResponseCollection = {
  __typename?: 'CollectionRelationResponseCollection';
  data: Array<CollectionEntity>;
};

export type ComponentCoreCollectionCard = {
  __typename?: 'ComponentCoreCollectionCard';
  button_href?: Maybe<Scalars['String']>;
  button_text?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  subtext?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCoreCollectionCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreCollectionCardFiltersInput>>>;
  button_href?: InputMaybe<StringFilterInput>;
  button_text?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCoreCollectionCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreCollectionCardFiltersInput>>>;
  subtext?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCoreOrderLineItem = {
  __typename?: 'ComponentCoreOrderLineItem';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  product_variant?: Maybe<ProductVariantEntityResponse>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ComponentCoreOrderLineItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCoreOrderLineItemFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCoreOrderLineItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCoreOrderLineItemFiltersInput>>>;
  product_variant?: InputMaybe<ProductVariantFiltersInput>;
  quantity?: InputMaybe<IntFilterInput>;
};

export type ComponentCoreOrderLineItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  product_variant?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ComponentHomeFeaturedCollectionTabs = {
  __typename?: 'ComponentHomeFeaturedCollectionTabs';
  collections?: Maybe<CollectionRelationResponseCollection>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentHomeFeaturedCollectionTabsCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeFeaturedCollectionTabsInput = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeFeaturedCollections = {
  __typename?: 'ComponentHomeFeaturedCollections';
  cards?: Maybe<Array<Maybe<ComponentCoreCollectionCard>>>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentHomeFeaturedCollectionsCardsArgs = {
  filters?: InputMaybe<ComponentCoreCollectionCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeHeroSection = {
  __typename?: 'ComponentHomeHeroSection';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomeHeroSectionInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomeProductsFromCollection = {
  __typename?: 'ComponentHomeProductsFromCollection';
  collection?: Maybe<CollectionEntityResponse>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentProductProductVariant = {
  __typename?: 'ComponentProductProductVariant';
  current_price: Scalars['Float'];
  id: Scalars['ID'];
  in_stock?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  sku: Scalars['String'];
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String'];
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Order_Customer_Type {
  Guest = 'GUEST',
  User = 'USER'
}

export enum Enum_Order_Payment_Method {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE'
}

export enum Enum_Order_Status {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Paid = 'PAID',
  PaymentFailed = 'PAYMENT_FAILED',
  Processing = 'PROCESSING',
  Shipped = 'SHIPPED'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Union Type of all registered slug content types */
export type FindSlugResponse = CollectionEntityResponse | OrderEntityResponse | ProductEntityResponse;

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Address | Collection | ComponentCoreCollectionCard | ComponentCoreOrderLineItem | ComponentHomeFeaturedCollectionTabs | ComponentHomeFeaturedCollections | ComponentHomeHeroSection | ComponentHomeProductsFromCollection | ComponentProductProductVariant | ComponentSharedMetaSocial | ComponentSharedSeo | Homepage | I18NLocale | Order | Product | ProductVariant | SlugifySlug | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  body?: Maybe<Array<Maybe<HomepageBodyDynamicZone>>>;
  collection_tabs?: Maybe<ComponentHomeFeaturedCollectionTabs>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hero?: Maybe<ComponentHomeHeroSection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepageBodyDynamicZone = ComponentHomeFeaturedCollections | ComponentHomeProductsFromCollection | Error;

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  body?: InputMaybe<Array<Scalars['HomepageBodyDynamicZoneInput']>>;
  collection_tabs?: InputMaybe<ComponentHomeFeaturedCollectionTabsInput>;
  hero?: InputMaybe<ComponentHomeHeroSectionInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAddress?: Maybe<AddressEntityResponse>;
  createCollection?: Maybe<CollectionEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createProductVariant?: Maybe<ProductVariantEntityResponse>;
  createSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAddress?: Maybe<AddressEntityResponse>;
  deleteCollection?: Maybe<CollectionEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteProductVariant?: Maybe<ProductVariantEntityResponse>;
  deleteSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAddress?: Maybe<AddressEntityResponse>;
  updateCollection?: Maybe<CollectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateProductVariant?: Maybe<ProductVariantEntityResponse>;
  updateSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAddressArgs = {
  data: AddressInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateProductVariantArgs = {
  data: ProductVariantInput;
};


export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSlugifySlugArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAddressArgs = {
  data: AddressInput;
  id: Scalars['ID'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductVariantArgs = {
  data: ProductVariantInput;
  id: Scalars['ID'];
};


export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  customer_type?: Maybe<Enum_Order_Customer_Type>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  line_items?: Maybe<Array<Maybe<ComponentCoreOrderLineItem>>>;
  order_details?: Maybe<Scalars['JSON']>;
  order_id: Scalars['String'];
  payment_method?: Maybe<Enum_Order_Payment_Method>;
  shipping_info?: Maybe<Scalars['JSON']>;
  status?: Maybe<Enum_Order_Status>;
  total_price?: Maybe<Scalars['Float']>;
  transaction_id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type OrderLine_ItemsArgs = {
  filters?: InputMaybe<ComponentCoreOrderLineItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customer_type?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  line_items?: InputMaybe<ComponentCoreOrderLineItemFiltersInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  order_details?: InputMaybe<JsonFilterInput>;
  order_id?: InputMaybe<StringFilterInput>;
  payment_method?: InputMaybe<StringFilterInput>;
  shipping_info?: InputMaybe<JsonFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  total_price?: InputMaybe<FloatFilterInput>;
  transaction_id?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  customer_type?: InputMaybe<Enum_Order_Customer_Type>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  line_items?: InputMaybe<Array<InputMaybe<ComponentCoreOrderLineItemInput>>>;
  order_details?: InputMaybe<Scalars['JSON']>;
  order_id?: InputMaybe<Scalars['String']>;
  payment_method?: InputMaybe<Enum_Order_Payment_Method>;
  shipping_info?: InputMaybe<Scalars['JSON']>;
  status?: InputMaybe<Enum_Order_Status>;
  total_price?: InputMaybe<Scalars['Float']>;
  transaction_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  collections?: Maybe<CollectionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  featured_image: UploadFileEntityResponse;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  in_stock?: Maybe<Scalars['Boolean']>;
  is_featured?: Maybe<Scalars['Boolean']>;
  long_description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  product_variants?: Maybe<ProductVariantRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  related_products?: Maybe<ProductRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  short_description?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  upsell_product?: Maybe<ProductEntityResponse>;
};


export type ProductCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductProduct_VariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductRelated_ProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  collections?: InputMaybe<CollectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  in_stock?: InputMaybe<BooleanFilterInput>;
  is_featured?: InputMaybe<BooleanFilterInput>;
  long_description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  product_variants?: InputMaybe<ProductVariantFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  related_products?: InputMaybe<ProductFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  short_description?: InputMaybe<StringFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  upsell_product?: InputMaybe<ProductFiltersInput>;
};

export type ProductInput = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  featured_image?: InputMaybe<Scalars['ID']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  in_stock?: InputMaybe<Scalars['Boolean']>;
  is_featured?: InputMaybe<Scalars['Boolean']>;
  long_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  product_variants?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  related_products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  short_description?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  upsell_product?: InputMaybe<Scalars['ID']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  createdAt?: Maybe<Scalars['DateTime']>;
  current_price: Scalars['Float'];
  in_stock?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parent?: Maybe<ProductEntityResponse>;
  price?: Maybe<Scalars['Float']>;
  sku: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantEntity = {
  __typename?: 'ProductVariantEntity';
  attributes?: Maybe<ProductVariant>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductVariantEntityResponse = {
  __typename?: 'ProductVariantEntityResponse';
  data?: Maybe<ProductVariantEntity>;
};

export type ProductVariantEntityResponseCollection = {
  __typename?: 'ProductVariantEntityResponseCollection';
  data: Array<ProductVariantEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  current_price?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  in_stock?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  parent?: InputMaybe<ProductFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductVariantInput = {
  current_price?: InputMaybe<Scalars['Float']>;
  in_stock?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductVariantRelationResponseCollection = {
  __typename?: 'ProductVariantRelationResponseCollection';
  data: Array<ProductVariantEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  address?: Maybe<AddressEntityResponse>;
  addresses?: Maybe<AddressEntityResponseCollection>;
  collection?: Maybe<CollectionEntityResponse>;
  collections?: Maybe<CollectionEntityResponseCollection>;
  findSlug?: Maybe<FindSlugResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  productVariant?: Maybe<ProductVariantEntityResponse>;
  productVariants?: Maybe<ProductVariantEntityResponseCollection>;
  products?: Maybe<ProductEntityResponseCollection>;
  slugifySlug?: Maybe<SlugifySlugEntityResponse>;
  slugifySlugs?: Maybe<SlugifySlugEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAddressArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAddressesArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFindSlugArgs = {
  modelName?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductVariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySlugifySlugArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySlugifySlugsArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SlugifySlug = {
  __typename?: 'SlugifySlug';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SlugifySlugEntity = {
  __typename?: 'SlugifySlugEntity';
  attributes?: Maybe<SlugifySlug>;
  id?: Maybe<Scalars['ID']>;
};

export type SlugifySlugEntityResponse = {
  __typename?: 'SlugifySlugEntityResponse';
  data?: Maybe<SlugifySlugEntity>;
};

export type SlugifySlugEntityResponseCollection = {
  __typename?: 'SlugifySlugEntityResponseCollection';
  data: Array<SlugifySlugEntity>;
  meta: ResponseCollectionMeta;
};

export type SlugifySlugFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlugifySlugFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  address_book?: Maybe<AddressRelationResponseCollection>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  orders?: Maybe<OrderRelationResponseCollection>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};


export type UsersPermissionsUserAddress_BookArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  address_book?: InputMaybe<AddressFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  address_book?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CollectionSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionSlugsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionEntityResponseCollection', data: Array<{ __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', slug: string } | null }> } | null };

export type SingleCollectionQueryVariables = Exact<{
  modelName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type SingleCollectionQuery = { __typename?: 'Query', findSlug?: { __typename?: 'CollectionEntityResponse', data?: { __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null, slug: string, description?: string | null, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null> | null } | null, feature_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null } | null } | { __typename?: 'OrderEntityResponse' } | { __typename?: 'ProductEntityResponse' } | null };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', title?: string | null, hero?: { __typename?: 'ComponentHomeHeroSection', title?: string | null, id: string, content?: string | null } | null, collection_tabs?: { __typename?: 'ComponentHomeFeaturedCollectionTabs', title?: string | null, content?: string | null, id: string, collections?: { __typename?: 'CollectionRelationResponseCollection', data: Array<{ __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', slug: string, name?: string | null, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string, sku: string, name: string, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, product_variants?: { __typename?: 'ProductVariantRelationResponseCollection', data: Array<{ __typename?: 'ProductVariantEntity', id?: string | null, attributes?: { __typename?: 'ProductVariant', slug: string, sku: string, price?: number | null, name: string, in_stock?: boolean | null, current_price: number } | null }> } | null } | null }> } | null } | null }> } | null } | null, body?: Array<{ __typename: 'ComponentHomeFeaturedCollections', title?: string | null, id: string, content?: string | null, cards?: Array<{ __typename?: 'ComponentCoreCollectionCard', title?: string | null, subtext?: string | null, id: string, button_text?: string | null, button_href?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null> | null } | { __typename: 'ComponentHomeProductsFromCollection', title?: string | null, id: string, content?: string | null, collection?: { __typename?: 'CollectionEntityResponse', data?: { __typename?: 'CollectionEntity', id?: string | null, attributes?: { __typename?: 'Collection', name?: string | null, slug: string, products?: { __typename?: 'ProductRelationResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, slug: string, sku: string, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, product_variants?: { __typename?: 'ProductVariantRelationResponseCollection', data: Array<{ __typename?: 'ProductVariantEntity', id?: string | null, attributes?: { __typename?: 'ProductVariant', slug: string, sku: string, price?: number | null, name: string, in_stock?: boolean | null, current_price: number } | null }> } | null } | null }> } | null } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type CreateOrderMutationVariables = Exact<{
  data: OrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'OrderEntityResponse', data?: { __typename?: 'OrderEntity', id?: string | null, attributes?: { __typename?: 'Order', order_id: string, payment_method?: Enum_Order_Payment_Method | null, total_price?: number | null, email?: string | null, first_name?: string | null, last_name?: string | null, customer_type?: Enum_Order_Customer_Type | null, order_details?: any | null, shipping_info?: any | null, status?: Enum_Order_Status | null, transaction_id: string, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string } | null } | null } | null } | null } | null } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string } | null }> } | null };

export type FindProductQueryVariables = Exact<{
  modelName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
}>;


export type FindProductQuery = { __typename?: 'Query', findSlug?: { __typename?: 'CollectionEntityResponse' } | { __typename?: 'OrderEntityResponse' } | { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', name: string, slug: string, sku: string, in_stock?: boolean | null, long_description?: string | null, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null> | null } | null, product_variants?: { __typename?: 'ProductVariantRelationResponseCollection', data: Array<{ __typename?: 'ProductVariantEntity', id?: string | null, attributes?: { __typename?: 'ProductVariant', slug: string, sku: string, price?: number | null, name: string, in_stock?: boolean | null, current_price: number } | null }> } | null } | null } | null } | null };

export type ProductsByCategoryQueryVariables = Exact<{
  filters?: InputMaybe<ProductFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type ProductsByCategoryQuery = { __typename?: 'Query', products?: { __typename?: 'ProductEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'ProductEntity', id?: string | null, attributes?: { __typename?: 'Product', slug: string, sku: string, name: string, in_stock?: boolean | null, featured_image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null, createdAt?: any | null, updatedAt?: any | null } | null } | null }, product_variants?: { __typename?: 'ProductVariantRelationResponseCollection', data: Array<{ __typename?: 'ProductVariantEntity', id?: string | null, attributes?: { __typename?: 'ProductVariant', price?: number | null, sku: string, slug: string, name: string, in_stock?: boolean | null, current_price: number } | null }> } | null } | null }> } | null };


export const CollectionSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CollectionSlugsQuery, CollectionSlugsQueryVariables>;
export const SingleCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SingleCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findSlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"modelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaSocial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"socialNetwork"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"metaRobots"}},{"kind":"Field","name":{"kind":"Name","value":"structuredData"}},{"kind":"Field","name":{"kind":"Name","value":"metaViewport"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"feature_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SingleCollectionQuery, SingleCollectionQueryVariables>;
export const HomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection_tabs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_featured"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"current_price"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentHomeFeaturedCollections"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtext"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"button_text"}},{"kind":"Field","name":{"kind":"Name","value":"button_href"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentHomeProductsFromCollection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"product_variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"current_price"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"payment_method"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_type"}},{"kind":"Field","name":{"kind":"Name","value":"order_details"}},{"kind":"Field","name":{"kind":"Name","value":"shipping_info"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const FindProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findSlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"modelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}}},{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"long_description"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaSocial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"socialNetwork"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"metaRobots"}},{"kind":"Field","name":{"kind":"Name","value":"structuredData"}},{"kind":"Field","name":{"kind":"Name","value":"metaViewport"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"current_price"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindProductQuery, FindProductQueryVariables>;
export const ProductsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"featured_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"provider_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"product_variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"current_price"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>;