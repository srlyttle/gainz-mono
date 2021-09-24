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
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { MyContext } from './types'
import cors from 'cors'

const port = 4000

const main = async () => {
  const app = express()
  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient({
    host: 'redis-server', // service name in docker compose for redis
    port: 6379,
  })

  app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
    }),
  )
  // TODO - possibly replace with jwt
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', // csrf
        secure: false, // cookie only works in https
      },
      saveUninitialized: false,
      secret: 'hjkhjkhkjhb11', // TODO make env variable
      resave: false,
    }),
  )
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
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({
    app,
    cors: false,
  })
  apolloServer.applyMiddleware({ app })
}
main()
