import { ApolloClient, InMemoryCache } from '@apollo/client'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export const apolloClient = new ApolloClient({
  uri: `${apiRoot}/api/graphql`,
  cache: new InMemoryCache(),
})
