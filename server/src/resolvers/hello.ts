import { Query, Resolver } from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  hello() {
    return 'hello'
  }
}
