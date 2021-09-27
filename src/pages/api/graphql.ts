import { ApolloServer } from 'apollo-server-micro'
import typeDefs from '@gql/typeDefs.graphql'
import { resolvers } from '@gql/resolvers'

export const config = {
  api: {
    bodyParser: false,
  },
}

const isDevelopment = process.env.NODE_ENV === 'development'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: isDevelopment,
  playground: isDevelopment,
})

const handler = apolloServer.createHandler({ path: '/api/graphql' })

// const handler = apolloServer.start().then(() => {
//   return apolloServer.createHandler({ path: '/api/graphql' })
// })

export default handler

// const j = apolloServer.start().then(()=>{
//   const handler = apolloServer.createHandler()
//   return
// })
