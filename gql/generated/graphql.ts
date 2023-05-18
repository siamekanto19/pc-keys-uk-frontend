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
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: any;
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: any;
};

export type Address = AddressInterface & ElementInterface & {
  __typename?: 'Address';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Two-letter country code */
  countryCode: Scalars['String'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Address_CountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']>;
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']>;
  /** Administrative area. */
  administrativeArea?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Two-letter country code */
  countryCode: Scalars['String'];
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Dependent locality */
  dependentLocality?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The first name on the address. */
  firstName?: Maybe<Scalars['String']>;
  /** The full name on the address. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The last name on the address. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude */
  latitude?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Longitude */
  longitude?: Maybe<Scalars['String']>;
  /** Organization name */
  organization?: Maybe<Scalars['String']>;
  /** Organization tax ID */
  organizationTaxId?: Maybe<Scalars['String']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortingCode?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String'];
};

export type AssetCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified?: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ image heights. */
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of transform handles to preload. */
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Alternative text for the asset. */
  alt?: Maybe<Scalars['String']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the asset file was last modified. */
  dateModified?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** This queries for a single embedded asset. */
  embeddedAsset?: Maybe<EmbeddedAssetInterface>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The file extension for the asset file. */
  extension: Scalars['String'];
  /** The filename of the asset file. */
  filename: Scalars['String'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int'];
  /** Returns the file’s format. */
  format?: Maybe<Scalars['String']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean'];
  /** The height in pixels or null if it’s not an image. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** An `<img>` tag based on this asset. */
  img?: Maybe<Scalars['String']>;
  /** The file kind. */
  kind: Scalars['String'];
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType?: Maybe<Scalars['String']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The file size in bytes. */
  size?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url?: Maybe<Scalars['String']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId?: Maybe<Scalars['Int']>;
  /** The width in pixels or null if it’s not an image. */
  width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  immediately?: InputMaybe<Scalars['Boolean']>;
  interlace?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  transform?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Auth = {
  __typename?: 'Auth';
  jwt: Scalars['String'];
  jwtExpiresAt: Scalars['Float'];
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['Float'];
  schema: Scalars['String'];
  user?: Maybe<UserInterface>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent?: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceAncestorsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceDescendantsArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Element_CountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String'];
};

export type EmbeddedAsset = EmbeddedAssetInterface & {
  __typename?: 'EmbeddedAsset';
  /** The aspect ratio for the embedded asset. */
  aspectRatio?: Maybe<Scalars['Float']>;
  /** The author name for the embedded asset. */
  authorName?: Maybe<Scalars['String']>;
  /** The author URL for the embedded asset. */
  authorUrl?: Maybe<Scalars['String']>;
  /** The code for the embedded asset. */
  code?: Maybe<Scalars['String']>;
  /** The description of the embedded asset. */
  description?: Maybe<Scalars['String']>;
  /** The feeds for the embedded asset. */
  feeds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The height for the embedded asset. */
  height?: Maybe<Scalars['Int']>;
  /** The embed HTML for the embedded asset. */
  html?: Maybe<Scalars['String']>;
  /** The embed code for the embedded asset, if the embedded asset's code is an iframe. */
  iframeCode?: Maybe<Scalars['String']>;
  /** The embed URL for the embedded asset, if the embedded asset's code is an iframe. */
  iframeSrc?: Maybe<Scalars['String']>;
  /** The image for the embedded asset. */
  image?: Maybe<Scalars['String']>;
  /** The image height for the embedded asset. */
  imageHeight?: Maybe<Scalars['Int']>;
  /** The image width for the embedded asset. */
  imageWidth?: Maybe<Scalars['Int']>;
  /** The images for the embedded asset. */
  images?: Maybe<Array<Maybe<EmbeddedAssetImageInterface>>>;
  /** Whether or not the the embed code is safe to use. */
  isSafe?: Maybe<Scalars['Boolean']>;
  /** The license for the embedded asset. */
  license?: Maybe<Scalars['String']>;
  /** The provider icon for the embedded asset. */
  providerIcon?: Maybe<Scalars['String']>;
  /** The provider icons for the embedded asset. */
  providerIcons?: Maybe<Array<Maybe<EmbeddedAssetImageInterface>>>;
  /** The provider name for the embedded asset. */
  providerName?: Maybe<Scalars['String']>;
  /** The provider URL for the embedded asset. */
  providerUrl?: Maybe<Scalars['String']>;
  /** The published time of the embedded asset. */
  publishedTime?: Maybe<Scalars['String']>;
  /** The tags for the embedded asset. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the embedded asset. */
  title?: Maybe<Scalars['String']>;
  /** The type of the embedded asset. */
  type?: Maybe<Scalars['String']>;
  /** The url of the embedded asset. */
  url?: Maybe<Scalars['String']>;
  /** The width for the embedded asset. */
  width?: Maybe<Scalars['Int']>;
};


export type EmbeddedAssetIframeCodeArgs = {
  attributes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  params?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  removeAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EmbeddedAssetIframeSrcArgs = {
  params: Array<InputMaybe<Scalars['String']>>;
};

/** Embedded asset image data */
export type EmbeddedAssetImage = EmbeddedAssetImageInterface & {
  __typename?: 'EmbeddedAssetImage';
  /** The height of the image. */
  height?: Maybe<Scalars['Int']>;
  /** The MIME type of the image. */
  mime?: Maybe<Scalars['String']>;
  /** The size of the image. */
  size?: Maybe<Scalars['Int']>;
  /** The URL of the image. */
  url?: Maybe<Scalars['String']>;
  /** The width of the image. */
  width?: Maybe<Scalars['Int']>;
};

/** This is the interface implemented by all embedded asset images. */
export type EmbeddedAssetImageInterface = {
  /** The height of the image. */
  height?: Maybe<Scalars['Int']>;
  /** The MIME type of the image. */
  mime?: Maybe<Scalars['String']>;
  /** The size of the image. */
  size?: Maybe<Scalars['Int']>;
  /** The URL of the image. */
  url?: Maybe<Scalars['String']>;
  /** The width of the image. */
  width?: Maybe<Scalars['Int']>;
};

/** This is the interface implemented by all embedded assets. */
export type EmbeddedAssetInterface = {
  /** The aspect ratio for the embedded asset. */
  aspectRatio?: Maybe<Scalars['Float']>;
  /** The author name for the embedded asset. */
  authorName?: Maybe<Scalars['String']>;
  /** The author URL for the embedded asset. */
  authorUrl?: Maybe<Scalars['String']>;
  /** The code for the embedded asset. */
  code?: Maybe<Scalars['String']>;
  /** The description of the embedded asset. */
  description?: Maybe<Scalars['String']>;
  /** The feeds for the embedded asset. */
  feeds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The height for the embedded asset. */
  height?: Maybe<Scalars['Int']>;
  /** The embed HTML for the embedded asset. */
  html?: Maybe<Scalars['String']>;
  /** The embed code for the embedded asset, if the embedded asset's code is an iframe. */
  iframeCode?: Maybe<Scalars['String']>;
  /** The embed URL for the embedded asset, if the embedded asset's code is an iframe. */
  iframeSrc?: Maybe<Scalars['String']>;
  /** The image for the embedded asset. */
  image?: Maybe<Scalars['String']>;
  /** The image height for the embedded asset. */
  imageHeight?: Maybe<Scalars['Int']>;
  /** The image width for the embedded asset. */
  imageWidth?: Maybe<Scalars['Int']>;
  /** The images for the embedded asset. */
  images?: Maybe<Array<Maybe<EmbeddedAssetImageInterface>>>;
  /** Whether or not the the embed code is safe to use. */
  isSafe?: Maybe<Scalars['Boolean']>;
  /** The license for the embedded asset. */
  license?: Maybe<Scalars['String']>;
  /** The provider icon for the embedded asset. */
  providerIcon?: Maybe<Scalars['String']>;
  /** The provider icons for the embedded asset. */
  providerIcons?: Maybe<Array<Maybe<EmbeddedAssetImageInterface>>>;
  /** The provider name for the embedded asset. */
  providerName?: Maybe<Scalars['String']>;
  /** The provider URL for the embedded asset. */
  providerUrl?: Maybe<Scalars['String']>;
  /** The published time of the embedded asset. */
  publishedTime?: Maybe<Scalars['String']>;
  /** The tags for the embedded asset. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The title of the embedded asset. */
  title?: Maybe<Scalars['String']>;
  /** The type of the embedded asset. */
  type?: Maybe<Scalars['String']>;
  /** The url of the embedded asset. */
  url?: Maybe<Scalars['String']>;
  /** The width for the embedded asset. */
  width?: Maybe<Scalars['Int']>;
};


/** This is the interface implemented by all embedded assets. */
export type EmbeddedAssetInterfaceIframeCodeArgs = {
  attributes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  params?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  removeAttributes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the interface implemented by all embedded assets. */
export type EmbeddedAssetInterfaceIframeSrcArgs = {
  params: Array<InputMaybe<Scalars['String']>>;
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf?: InputMaybe<Scalars['Int']>;
  /** Whether to only return entries that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level?: InputMaybe<Scalars['Int']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type Ether_SeoKeyword = {
  __typename?: 'Ether_SEOKeyword';
  keyword?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
};

/** Robots and canonical data */
export type Ether_SeoAdvanced = {
  __typename?: 'Ether_SeoAdvanced';
  canonical?: Maybe<Scalars['String']>;
  robots?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Ether_SeoData = {
  __typename?: 'Ether_SeoData';
  advanced?: Maybe<Ether_SeoAdvanced>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Ether_SeoKeyword>>>;
  social?: Maybe<Ether_SeoSocialNetworks>;
  title?: Maybe<Scalars['String']>;
};

/** Social data for an individual Social network */
export type Ether_SeoSocialData = {
  __typename?: 'Ether_SeoSocialData';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Ether_SeoSocialNetworks = {
  __typename?: 'Ether_SeoSocialNetworks';
  facebook?: Maybe<Ether_SeoSocialData>;
  twitter?: Maybe<Ether_SeoSocialData>;
};

export type FileInput = {
  /** The contents of the file in Base64 format. If provided, takes precedence over the URL. */
  fileData?: InputMaybe<Scalars['String']>;
  /** The file name to use (including the extension) data with the `fileData` field. */
  filename?: InputMaybe<Scalars['String']>;
  /** The URL of the file. */
  url?: InputMaybe<Scalars['String']>;
};

/** This is the interface implemented by all global sets. */
export type GlobalSetInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The handle of the global set. */
  handle: Scalars['String'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The name of the global set. */
  name: Scalars['String'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all global sets. */
export type GlobalSetInterface_CountArgs = {
  field: Scalars['String'];
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
  field: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Activates user. Requires `code` and `id` from Craft activation email. Returns success message. */
  activateUser: Scalars['String'];
  /** Logs a user in. Returns user and token. */
  authenticate: Auth;
  /** Create a draft for an entry and return the draft ID. */
  createDraft?: Maybe<Scalars['ID']>;
  /** Deletes authenticated user. Returns success message. */
  deleteAccount: Scalars['String'];
  /** Deletes authenticated user refresh token. Useful for logging out of current device. Returns boolean. */
  deleteRefreshToken: Scalars['Boolean'];
  /** Deletes all refresh tokens belonging to the authenticated user. Useful for logging out of all devices. Returns boolean. */
  deleteRefreshTokens: Scalars['Boolean'];
  /** Deletes authenticated password-less user. Returns success message. */
  deleteSocialAccount: Scalars['String'];
  /** Sends a password reset email to the user's email address. Returns success message. */
  forgottenPassword: Scalars['String'];
  ping?: Maybe<Scalars['String']>;
  /** Publish a draft for the entry and return the entry ID. */
  publishDraft?: Maybe<Scalars['ID']>;
  /** Refreshes a user's JWT. Checks for the occurrence of the `gql_refreshToken` cookie, and falls back to `refreshToken` argument. */
  refreshToken: Auth;
  /** Registers a user. Returns user and token. */
  register: Auth;
  /** Resends an activation email to the user. Returns success message. */
  resendActivation: Scalars['String'];
  /** Save the “Cart” draft. */
  save_cart_cart_Draft?: Maybe<Cart_Cart_Entry>;
  /** Save the “Cart” entry. */
  save_cart_cart_Entry?: Maybe<Cart_Cart_Entry>;
  /** Save the “Checkout: Address” draft. */
  save_checkoutAddress_checkoutAddress_Draft?: Maybe<CheckoutAddress_CheckoutAddress_Entry>;
  /** Save the “Checkout: Address” entry. */
  save_checkoutAddress_checkoutAddress_Entry?: Maybe<CheckoutAddress_CheckoutAddress_Entry>;
  /** Save the “Checkout: Shipping” draft. */
  save_checkoutShipping_checkoutShipping_Draft?: Maybe<CheckoutShipping_CheckoutShipping_Entry>;
  /** Save the “Checkout: Shipping” entry. */
  save_checkoutShipping_checkoutShipping_Entry?: Maybe<CheckoutShipping_CheckoutShipping_Entry>;
  /** Save the “Checkout: Success” draft. */
  save_checkoutSuccess_checkoutSuccess_Draft?: Maybe<CheckoutSuccess_CheckoutSuccess_Entry>;
  /** Save the “Checkout: Success” entry. */
  save_checkoutSuccess_checkoutSuccess_Entry?: Maybe<CheckoutSuccess_CheckoutSuccess_Entry>;
  /** Save the “Checkout: Summary” draft. */
  save_checkoutSummary_checkoutSummary_Draft?: Maybe<CheckoutSummary_CheckoutSummary_Entry>;
  /** Save the “Checkout: Summary” entry. */
  save_checkoutSummary_checkoutSummary_Entry?: Maybe<CheckoutSummary_CheckoutSummary_Entry>;
  /** Save the “Checkout” draft. */
  save_checkout_checkout_Draft?: Maybe<Checkout_Checkout_Entry>;
  /** Save the “Checkout” entry. */
  save_checkout_checkout_Entry?: Maybe<Checkout_Checkout_Entry>;
  /** Sets password for unauthenticated user. Requires `code` and `id` from Craft reset password email. Returns success message. */
  setPassword: Scalars['String'];
  /** Updates password for authenticated user. Requires JWT and current password. Returns success message. */
  updatePassword: Scalars['String'];
  /** Updates authenticated user. Returns user. */
  updateViewer?: Maybe<UserInterface>;
};


export type MutationActivateUserArgs = {
  code: Scalars['String'];
  id: Scalars['String'];
};


export type MutationAuthenticateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateDraftArgs = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteAccountArgs = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationForgottenPasswordArgs = {
  email: Scalars['String'];
};


export type MutationPublishDraftArgs = {
  id: Scalars['Int'];
  provisional?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  preferredLanguage?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationResendActivationArgs = {
  email: Scalars['String'];
};


export type MutationSave_Cart_Cart_DraftArgs = {
  body?: InputMaybe<Scalars['String']>;
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_Cart_Cart_EntryArgs = {
  body?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutAddress_CheckoutAddress_DraftArgs = {
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutAddress_CheckoutAddress_EntryArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutShipping_CheckoutShipping_DraftArgs = {
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutShipping_CheckoutShipping_EntryArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutSuccess_CheckoutSuccess_DraftArgs = {
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutSuccess_CheckoutSuccess_EntryArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutSummary_CheckoutSummary_DraftArgs = {
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_CheckoutSummary_CheckoutSummary_EntryArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_Checkout_Checkout_DraftArgs = {
  draftId: Scalars['ID'];
  draftName?: InputMaybe<Scalars['String']>;
  draftNotes?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  provisional?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSave_Checkout_Checkout_EntryArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  heading?: InputMaybe<Scalars['String']>;
  postDate?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<Scalars['String']>;
  siteId?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationSetPasswordArgs = {
  code: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  confirmPassword: Scalars['String'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationUpdateViewerArgs = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<FileInput>;
  preferredLanguage?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ProductInput = {
  /** Whether to only return products that are available to purchase. */
  availableForPurchase?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  colour?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the default price on the product. */
  defaultPrice?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Whether to only return products that the user has permission to edit. */
  editable?: InputMaybe<Scalars['Boolean']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results to only products that have certain variants. */
  hasVariant?: InputMaybe<VariantInput>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageAlt?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  mainImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prodtype?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  shortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the product type the products belong to per the product type’s handles. */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the product types the products belong to, per the product type IDs. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all products. */
export type ProductInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** If the product is available for purchase. */
  availableForPurchase?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The price of the default variant for the product. */
  defaultPrice?: Maybe<Scalars['Float']>;
  /** The formatted price of the default variant for the product. */
  defaultPriceAsCurrency?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The handle of the product type that contains the product. */
  productTypeHandle?: Maybe<Scalars['String']>;
  /** The ID of the product type that contains the product. */
  productTypeId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The product’s full URL */
  url?: Maybe<Scalars['String']>;
  /** The product’s variants. */
  variants?: Maybe<Array<Maybe<VariantInterface>>>;
};


/** This is the interface implemented by all products. */
export type ProductInterface_CountArgs = {
  field: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** This query is used to query for a single asset. */
  asset?: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int'];
  /** This query is used to query for assets. */
  assets?: Maybe<Array<Maybe<AssetInterface>>>;
  /** Entries within the cart section. */
  cartEntries?: Maybe<Array<Maybe<CartSectionEntryUnion>>>;
  /** Entries within the checkoutAddress section. */
  checkoutAddressEntries?: Maybe<Array<Maybe<CheckoutAddressSectionEntryUnion>>>;
  /** Entries within the checkout section. */
  checkoutEntries?: Maybe<Array<Maybe<CheckoutSectionEntryUnion>>>;
  /** Entries within the checkoutShipping section. */
  checkoutShippingEntries?: Maybe<Array<Maybe<CheckoutShippingSectionEntryUnion>>>;
  /** Entries within the checkoutSuccess section. */
  checkoutSuccessEntries?: Maybe<Array<Maybe<CheckoutSuccessSectionEntryUnion>>>;
  /** Entries within the checkoutSummary section. */
  checkoutSummaryEntries?: Maybe<Array<Maybe<CheckoutSummarySectionEntryUnion>>>;
  /** This query is used to query for entries. */
  entries?: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry?: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int'];
  /** This query is used to query for a single global set. */
  globalSet?: Maybe<GlobalSetInterface>;
  /** This query is used to query for global sets. */
  globalSets?: Maybe<Array<Maybe<GlobalSetInterface>>>;
  ping?: Maybe<Scalars['String']>;
  /** This query is used to query for a product. */
  product?: Maybe<ProductInterface>;
  /** This query is used to return the number of products. */
  productCount: Scalars['Int'];
  /** This query is used to query for products. */
  products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** This query is used to query for a variant. */
  variant?: Maybe<VariantInterface>;
  /** This query is used to return the number of variants. */
  variantCount: Scalars['Int'];
  /** This query is used to query for variants. */
  variants?: Maybe<Array<Maybe<VariantInterface>>>;
  /** Gets authenticated user. */
  viewer?: Maybe<UserInterface>;
};


export type QueryAssetArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAssetCountArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAssetsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCartEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCheckoutAddressEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCheckoutEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCheckoutShippingEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCheckoutSuccessEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCheckoutSummaryEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntryArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEntryCountArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGlobalSetArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalSetsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductArgs = {
  availableForPurchase?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  colour?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasVariant?: InputMaybe<VariantInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageAlt?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mainImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prodtype?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  shortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductCountArgs = {
  availableForPurchase?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  colour?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasVariant?: InputMaybe<VariantInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageAlt?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mainImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prodtype?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  shortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductsArgs = {
  availableForPurchase?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  colour?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasVariant?: InputMaybe<VariantInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageAlt?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mainImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prodtype?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  shortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVariantArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasProduct?: InputMaybe<ProductInput>;
  hasSales?: InputMaybe<Scalars['Boolean']>;
  hasStock?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  maxQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  minQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stock?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  weight?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
};


export type QueryVariantCountArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasProduct?: InputMaybe<ProductInput>;
  hasSales?: InputMaybe<Scalars['Boolean']>;
  hasStock?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  maxQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  minQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stock?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  weight?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
};


export type QueryVariantsArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasProduct?: InputMaybe<ProductInput>;
  hasSales?: InputMaybe<Scalars['Boolean']>;
  hasStock?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  maxQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  minQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stock?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  weight?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
};

export type Sale = {
  __typename?: 'Sale';
  /** How the sale should be applied. */
  apply?: Maybe<Scalars['String']>;
  /** The amount applied used by the apply option. */
  applyAmount?: Maybe<Scalars['Float']>;
  /** The amount applied used by the apply option. */
  applyAmountAsFlat?: Maybe<Scalars['Float']>;
  /** The amount applied used by the apply option. */
  applyAmountAsPercent?: Maybe<Scalars['String']>;
  /** Start date of the sale. */
  dateFrom?: Maybe<Scalars['DateTime']>;
  /** Start date of the sale. */
  dateTo?: Maybe<Scalars['DateTime']>;
  /** Description of the sale. */
  description?: Maybe<Scalars['String']>;
  /** The name of the sale as described in the control panel. */
  name?: Maybe<Scalars['String']>;
};

export type TagCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User = ElementInterface & UserInterface & {
  __typename?: 'User';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  name: Scalars['String'];
  /** The user’s preferences. */
  preferences: Scalars['String'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The username. */
  username?: Maybe<Scalars['String']>;
};


export type User_CountArgs = {
  field: Scalars['String'];
};


export type UserAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ full names. */
  fullName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the users’ last names. */
  lastName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The user’s addresses. */
  addresses?: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The user’s email. */
  email?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The user’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The user’s first name or username. */
  friendlyName?: Maybe<Scalars['String']>;
  /** The user’s full name. */
  fullName?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The user’s full name or username. */
  name: Scalars['String'];
  /** The user’s preferences. */
  preferences: Scalars['String'];
  /** The user’s preferred language. */
  preferredLanguage?: Maybe<Scalars['String']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The username. */
  username?: Maybe<Scalars['String']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCode?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VariantInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results to only variants for certain products. */
  hasProduct?: InputMaybe<ProductInput>;
  /** Narrows the query results based on whether the variant has sales applied. */
  hasSales?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on whether the variant has stock available. */
  hasStock?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the variant’s height dimension. */
  height?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the variants default status. */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the variant’s length dimension. */
  length?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Sets the limit for paginated results. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Narrows the query results based on the variant’s maximum allowed quantity to be purchased. */
  maxQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the variant’s minimum allowed quantity to be purchased. */
  minQty?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Sets the offset for paginated results. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy?: InputMaybe<Scalars['String']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on variant price. */
  price?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the variant’s product ID. */
  productId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on a reference string. */
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search?: InputMaybe<Scalars['String']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the variant SKU. */
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on variant stock level. */
  stock?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the variant’s product’s type ID. */
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique?: InputMaybe<Scalars['Boolean']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Narrows the query results based on the variant’s weight dimension. */
  weight?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  /** Narrows the query results based on the variant’s width dimension. */
  width?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
};

/** This is the interface implemented by all variants. */
export type VariantInterface = {
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** If the variant has unlimited stock. */
  hasUnlimitedStock?: Maybe<Scalars['Boolean']>;
  /** The height of the variant. */
  height?: Maybe<Scalars['Float']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** If the variant is available to be purchased. */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** If the variant is the default for the product. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The length of the variant. */
  length?: Maybe<Scalars['Float']>;
  /** The maximum allowed quantity to be purchased. */
  maxQty?: Maybe<Scalars['Int']>;
  /** The minimum allowed quantity to be purchased. */
  minQty?: Maybe<Scalars['Int']>;
  /** The price of the variant. */
  price?: Maybe<Scalars['Float']>;
  /** The formatted price of the variant. */
  priceAsCurrency?: Maybe<Scalars['String']>;
  /** The variant’s parent product. */
  product?: Maybe<ProductInterface>;
  /** The ID of the variant’s parent product. */
  productId?: Maybe<Scalars['Int']>;
  /** The title of the variant’s parent product. */
  productTitle?: Maybe<Scalars['String']>;
  /** The product type ID of the variant’s parent product. */
  productTypeId?: Maybe<Scalars['Int']>;
  /** The sale price of the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  salePrice?: Maybe<Scalars['Float']>;
  /** The formatted sale price of the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  salePriceAsCurrency?: Maybe<Scalars['String']>;
  /** The sales that apply to the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  sales?: Maybe<Array<Maybe<Sale>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The SKU of the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the variant. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The stock level of the variant. */
  stock?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The weight of the variant. */
  weight?: Maybe<Scalars['Float']>;
  /** The width of the variant. */
  width?: Maybe<Scalars['Float']>;
};


/** This is the interface implemented by all variants. */
export type VariantInterface_CountArgs = {
  field: Scalars['String'];
};

export type Button_Button_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'button_button_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  ariaLabel?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  entryLink: Array<Maybe<EntryInterface>>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type Button_Button_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type Button_Button_BlockTypeEntryLinkArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type CartSectionEntryUnion = Cart_Cart_Entry;

export type Cart_Cart_Entry = ElementInterface & EntryInterface & {
  __typename?: 'cart_cart_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  subheading?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type Cart_Cart_Entry_CountArgs = {
  field: Scalars['String'];
};


export type Cart_Cart_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Cart_Cart_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type CheckoutAddressSectionEntryUnion = CheckoutAddress_CheckoutAddress_Entry;

export type CheckoutAddress_CheckoutAddress_Entry = ElementInterface & EntryInterface & {
  __typename?: 'checkoutAddress_checkoutAddress_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type CheckoutAddress_CheckoutAddress_Entry_CountArgs = {
  field: Scalars['String'];
};


export type CheckoutAddress_CheckoutAddress_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutAddress_CheckoutAddress_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type CheckoutSectionEntryUnion = Checkout_Checkout_Entry;

export type CheckoutShippingSectionEntryUnion = CheckoutShipping_CheckoutShipping_Entry;

export type CheckoutShipping_CheckoutShipping_Entry = ElementInterface & EntryInterface & {
  __typename?: 'checkoutShipping_checkoutShipping_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type CheckoutShipping_CheckoutShipping_Entry_CountArgs = {
  field: Scalars['String'];
};


export type CheckoutShipping_CheckoutShipping_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutShipping_CheckoutShipping_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type CheckoutSuccessSectionEntryUnion = CheckoutSuccess_CheckoutSuccess_Entry;

export type CheckoutSuccess_CheckoutSuccess_Entry = ElementInterface & EntryInterface & {
  __typename?: 'checkoutSuccess_checkoutSuccess_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type CheckoutSuccess_CheckoutSuccess_Entry_CountArgs = {
  field: Scalars['String'];
};


export type CheckoutSuccess_CheckoutSuccess_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSuccess_CheckoutSuccess_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type CheckoutSummarySectionEntryUnion = CheckoutSummary_CheckoutSummary_Entry;

export type CheckoutSummary_CheckoutSummary_Entry = ElementInterface & EntryInterface & {
  __typename?: 'checkoutSummary_checkoutSummary_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type CheckoutSummary_CheckoutSummary_Entry_CountArgs = {
  field: Scalars['String'];
};


export type CheckoutSummary_CheckoutSummary_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type CheckoutSummary_CheckoutSummary_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type Checkout_Checkout_Entry = ElementInterface & EntryInterface & {
  __typename?: 'checkout_checkout_Entry';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Returns the entry’s canonical ID. */
  canonicalId?: Maybe<Scalars['Int']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid?: Maybe<Scalars['String']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId?: Maybe<Scalars['Int']>;
  /** The name of the draft. */
  draftName?: Maybe<Scalars['String']>;
  /** The notes for the draft. */
  draftNotes?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The expiry date of the entry. */
  expiryDate?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** Returns whether this is a draft. */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is a revision. */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The element’s level within its structure */
  level?: Maybe<Scalars['Int']>;
  /** The element’s left position within its structure. */
  lft?: Maybe<Scalars['Int']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next?: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent?: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate?: Maybe<Scalars['DateTime']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev?: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId?: Maybe<Scalars['Int']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes?: Maybe<Scalars['String']>;
  /** The element’s right position within its structure. */
  rgt?: Maybe<Scalars['Int']>;
  /** The element’s structure’s root ID */
  root?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int'];
  seo?: Maybe<Ether_SeoData>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId?: Maybe<Scalars['Int']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s structure ID. */
  structureId?: Maybe<Scalars['Int']>;
  subheading?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The element’s full URL */
  url?: Maybe<Scalars['String']>;
};


export type Checkout_Checkout_Entry_CountArgs = {
  field: Scalars['String'];
};


export type Checkout_Checkout_EntryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryLocalizedArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryNextArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryParentArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Checkout_Checkout_EntryPrevArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type ContentBlocks_Body_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'contentBlocks_body_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type ContentBlocks_Body_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type ContentBlocks_Form_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'contentBlocks_form_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  form?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type ContentBlocks_Form_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type ContentBlocks_FullWidthImage_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'contentBlocks_fullWidthImage_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type ContentBlocks_FullWidthImage_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type ContentBlocks_Products_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'contentBlocks_products_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type ContentBlocks_Products_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type ContentBlocks_Products_BlockTypeProductsArgs = {
  availableForPurchase?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  colour?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultPrice?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasVariant?: InputMaybe<VariantInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageAlt?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  imageCaption?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  mainImage?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prodtype?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  productImages?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  shortDescription?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterNav_Pages_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'footerNav_pages_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  pages: Array<Maybe<EntryInterface>>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type FooterNav_Pages_BlockType_CountArgs = {
  field: Scalars['String'];
};


export type FooterNav_Pages_BlockTypePagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  authorGroup?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorGroupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  authorId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  before?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  expiryDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  seo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  subheading?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};

export type FooterNav_ProductCategories_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'footerNav_productCategories_BlockType';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int'];
  heading?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int'];
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
};


export type FooterNav_ProductCategories_BlockType_CountArgs = {
  field: Scalars['String'];
};

export type Product_Product = ElementInterface & ProductInterface & {
  __typename?: 'product_Product';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** If the product is available for purchase. */
  availableForPurchase?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  colour?: Maybe<Scalars['String']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** The price of the default variant for the product. */
  defaultPrice?: Maybe<Scalars['Float']>;
  /** The formatted price of the default variant for the product. */
  defaultPriceAsCurrency?: Maybe<Scalars['String']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  imageAlt?: Maybe<Scalars['String']>;
  imageCaption?: Maybe<Scalars['String']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  mainImage: Array<Maybe<AssetInterface>>;
  prodtype: Array<Maybe<CategoryInterface>>;
  productImages: Array<Maybe<AssetInterface>>;
  /** The handle of the product type that contains the product. */
  productTypeHandle?: Maybe<Scalars['String']>;
  /** The ID of the product type that contains the product. */
  productTypeId?: Maybe<Scalars['Int']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  seo?: Maybe<Ether_SeoData>;
  shortDescription?: Maybe<Scalars['String']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The product’s full URL */
  url?: Maybe<Scalars['String']>;
  /** The product’s variants. */
  variants?: Maybe<Array<Maybe<VariantInterface>>>;
};


export type Product_Product_CountArgs = {
  field: Scalars['String'];
};


export type Product_ProductMainImageArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Product_ProductProdtypeArgs = {
  ancestorDist?: InputMaybe<Scalars['Int']>;
  ancestorOf?: InputMaybe<Scalars['Int']>;
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descendantDist?: InputMaybe<Scalars['Int']>;
  descendantOf?: InputMaybe<Scalars['Int']>;
  editable?: InputMaybe<Scalars['Boolean']>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasDescendants?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  leaves?: InputMaybe<Scalars['Boolean']>;
  level?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextSiblingOf?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  positionedAfter?: InputMaybe<Scalars['Int']>;
  positionedBefore?: InputMaybe<Scalars['Int']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  prevSiblingOf?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  structureId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withStructure?: InputMaybe<Scalars['Boolean']>;
};


export type Product_ProductProductImagesArgs = {
  dateCreated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateModified?: InputMaybe<Scalars['String']>;
  dateUpdated?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fixedOrder?: InputMaybe<Scalars['Boolean']>;
  folderId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  hasAlt?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  inReverse?: InputMaybe<Scalars['Boolean']>;
  includeSubfolders?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  preferSites?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  ref?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relatedTo?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAll?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  relatedToAssets?: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories?: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries?: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags?: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers?: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siteId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  siteSettingsId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  unique?: InputMaybe<Scalars['Boolean']>;
  uploader?: InputMaybe<Scalars['QueryArgument']>;
  uri?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volume?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  volumeId?: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>;
  width?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  withTransforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Product_Variant = ElementInterface & VariantInterface & {
  __typename?: 'product_Variant';
  /** Return a number of related elements for a field. */
  _count?: Maybe<Scalars['Int']>;
  /** Whether the element is archived or not. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The date the element was created. */
  dateCreated?: Maybe<Scalars['DateTime']>;
  /** The date the element was last updated. */
  dateUpdated?: Maybe<Scalars['DateTime']>;
  /** Whether the element is enabled or not. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** If the variant has unlimited stock. */
  hasUnlimitedStock?: Maybe<Scalars['Boolean']>;
  /** The height of the variant. */
  height?: Maybe<Scalars['Float']>;
  /** The ID of the entity */
  id?: Maybe<Scalars['ID']>;
  /** If the variant is available to be purchased. */
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** If the variant is the default for the product. */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** The language of the site element is associated with. */
  language?: Maybe<Scalars['String']>;
  /** The length of the variant. */
  length?: Maybe<Scalars['Float']>;
  /** The maximum allowed quantity to be purchased. */
  maxQty?: Maybe<Scalars['Int']>;
  /** The minimum allowed quantity to be purchased. */
  minQty?: Maybe<Scalars['Int']>;
  /** The price of the variant. */
  price?: Maybe<Scalars['Float']>;
  /** The formatted price of the variant. */
  priceAsCurrency?: Maybe<Scalars['String']>;
  /** The variant’s parent product. */
  product?: Maybe<ProductInterface>;
  /** The ID of the variant’s parent product. */
  productId?: Maybe<Scalars['Int']>;
  /** The title of the variant’s parent product. */
  productTitle?: Maybe<Scalars['String']>;
  /** The product type ID of the variant’s parent product. */
  productTypeId?: Maybe<Scalars['Int']>;
  /** The sale price of the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  salePrice?: Maybe<Scalars['Float']>;
  /** The formatted sale price of the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  salePriceAsCurrency?: Maybe<Scalars['String']>;
  /** The sales that apply to the variant. CAUTION: This will not take into account sales that utilize user group conditions. */
  sales?: Maybe<Array<Maybe<Sale>>>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore?: Maybe<Scalars['Int']>;
  /** The handle of the site the element is associated with. */
  siteHandle?: Maybe<Scalars['String']>;
  /** The ID of the site the element is associated with. */
  siteId?: Maybe<Scalars['Int']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId?: Maybe<Scalars['ID']>;
  /** The SKU of the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The element’s slug. */
  slug?: Maybe<Scalars['String']>;
  /** The sort order of the variant. */
  sortOrder?: Maybe<Scalars['Int']>;
  /** The element’s status. */
  status?: Maybe<Scalars['String']>;
  /** The stock level of the variant. */
  stock?: Maybe<Scalars['Int']>;
  /** The element’s title. */
  title?: Maybe<Scalars['String']>;
  /** Whether the element has been soft-deleted or not. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** The UID of the entity */
  uid?: Maybe<Scalars['String']>;
  /** The element’s URI. */
  uri?: Maybe<Scalars['String']>;
  /** The weight of the variant. */
  weight?: Maybe<Scalars['Float']>;
  /** The width of the variant. */
  width?: Maybe<Scalars['Float']>;
};


export type Product_Variant_CountArgs = {
  field: Scalars['String'];
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'product_Product', id?: string | null, slug?: string | null } | null> | null };

export type ProductQueryVariables = Exact<{
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'product_Product', body?: string | null, availableForPurchase?: boolean | null, enabled?: boolean | null, id?: string | null, title?: string | null, slug?: string | null, status?: string | null, mainImage: Array<never | null>, variants?: Array<{ __typename?: 'product_Variant', isAvailable?: boolean | null, hasUnlimitedStock?: boolean | null, enabled?: boolean | null, id?: string | null, isDefault?: boolean | null, maxQty?: number | null, minQty?: number | null, price?: number | null, slug?: string | null, title?: string | null, sku?: string | null } | null> | null } | null };


export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"hasUnlimitedStock"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"maxQty"}},{"kind":"Field","name":{"kind":"Name","value":"minQty"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"product_Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"availableForPurchase"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;