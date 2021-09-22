import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from './resolvers/hello'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { PostsResolver } from './resolvers/post'
import { MikroORM } from '@mikro-orm/core'
import microConfig from './mikro-orm.config'
import { UserResolver } from './resolvers/user'

const port = 4000

const main = async () => {
  const app = express()
  const orm = await MikroORM.init(microConfig)
  await orm.getMigrator().up()
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostsResolver, UserResolver],
      validate: false,
    }),
    // this shows the playground instead of the new sandbox
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
    context: () => ({ em: orm.em }),
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}
main()
