import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Banner = {
  __typename?: 'Banner';
  groupId: Scalars['ID'];
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Query = {
  __typename?: 'Query';
  banners: Array<Maybe<Banner>>;
  status?: Maybe<Status>;
  statuses: Array<Maybe<Status>>;
};


export type QueryBannersArgs = {
  groupId: Scalars['ID'];
};


export type QueryStatusArgs = {
  id: Scalars['ID'];
};

export type Status = {
  __typename?: 'Status';
  author?: Maybe<Author>;
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
};

export type GetHomePagePropsQueryVariables = Exact<{
  bannerGroupId: Scalars['ID'];
}>;


export type GetHomePagePropsQuery = { __typename?: 'Query', statuses: Array<Maybe<{ __typename?: 'Status', id: string, body: string, createdAt: string, author?: Maybe<{ __typename?: 'Author', id: string, name: string }> }>>, banners: Array<Maybe<{ __typename?: 'Banner', id: string, href?: Maybe<string> }>> };

export type GetStatusPagePropsQueryVariables = Exact<{
  statusId: Scalars['ID'];
  bannerGroupId: Scalars['ID'];
}>;


export type GetStatusPagePropsQuery = { __typename?: 'Query', status?: Maybe<{ __typename?: 'Status', id: string, body: string, createdAt: string, author?: Maybe<{ __typename?: 'Author', id: string, name: string }> }>, banners: Array<Maybe<{ __typename?: 'Banner', id: string, href?: Maybe<string> }>> };


export const GetHomePagePropsDocument = gql`
    query getHomePageProps($bannerGroupId: ID!) {
  statuses {
    id
    body
    author {
      id
      name
    }
    createdAt
  }
  banners(groupId: $bannerGroupId) {
    id
    href
  }
}
    `;

/**
 * __useGetHomePagePropsQuery__
 *
 * To run a query within a React component, call `useGetHomePagePropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePagePropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePagePropsQuery({
 *   variables: {
 *      bannerGroupId: // value for 'bannerGroupId'
 *   },
 * });
 */
export function useGetHomePagePropsQuery(baseOptions: Apollo.QueryHookOptions<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>(GetHomePagePropsDocument, options);
      }
export function useGetHomePagePropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>(GetHomePagePropsDocument, options);
        }
export type GetHomePagePropsQueryHookResult = ReturnType<typeof useGetHomePagePropsQuery>;
export type GetHomePagePropsLazyQueryHookResult = ReturnType<typeof useGetHomePagePropsLazyQuery>;
export type GetHomePagePropsQueryResult = Apollo.QueryResult<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>;
export const GetStatusPagePropsDocument = gql`
    query getStatusPageProps($statusId: ID!, $bannerGroupId: ID!) {
  status(id: $statusId) {
    id
    body
    author {
      id
      name
    }
    createdAt
  }
  banners(groupId: $bannerGroupId) {
    id
    href
  }
}
    `;

/**
 * __useGetStatusPagePropsQuery__
 *
 * To run a query within a React component, call `useGetStatusPagePropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusPagePropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusPagePropsQuery({
 *   variables: {
 *      statusId: // value for 'statusId'
 *      bannerGroupId: // value for 'bannerGroupId'
 *   },
 * });
 */
export function useGetStatusPagePropsQuery(baseOptions: Apollo.QueryHookOptions<GetStatusPagePropsQuery, GetStatusPagePropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusPagePropsQuery, GetStatusPagePropsQueryVariables>(GetStatusPagePropsDocument, options);
      }
export function useGetStatusPagePropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusPagePropsQuery, GetStatusPagePropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusPagePropsQuery, GetStatusPagePropsQueryVariables>(GetStatusPagePropsDocument, options);
        }
export type GetStatusPagePropsQueryHookResult = ReturnType<typeof useGetStatusPagePropsQuery>;
export type GetStatusPagePropsLazyQueryHookResult = ReturnType<typeof useGetStatusPagePropsLazyQuery>;
export type GetStatusPagePropsQueryResult = Apollo.QueryResult<GetStatusPagePropsQuery, GetStatusPagePropsQueryVariables>;