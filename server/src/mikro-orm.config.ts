import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import path from 'path'
import { User } from './entities/User'
import { Split } from './entities/Split'

// we are telling it that the type is inits first param

type ConfigType = Parameters<typeof MikroORM.init>[0]

const config: ConfigType = {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User, Split],
  dbName: 'postgresdb',
  user: 'user',
  password: 'password',
  debug: !__prod__,
  type: 'postgresql', // postgres ??
  // docker image is called db
  host: 'db',
  port: 5432,
}

export default config
