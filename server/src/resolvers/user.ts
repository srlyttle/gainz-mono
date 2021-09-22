import { User } from '../entities/User'
import { MyContext } from 'src/types'
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import argon2 from 'argon2'

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string
  @Field()
  password: string
}

@ObjectType()
class FieldError {
  @Field()
  field: string
  @Field()
  message: string
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]
  @Field(() => User, { nullable: true })
  user?: User | null
}
@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async me(
    @Ctx()
    { req, em }: MyContext,
  ) {
    if (!req?.session?.userId) {
      return null
    }

    return await em.findOne(User, { id: req.session.userId })
  }

  @Mutation(() => UserResponse)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx()
    { em, req }: MyContext,
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: 'username',
            message: 'length must be greater than 2 characters',
          },
        ],
      }
    }
    const userExists = await em.findOne(User, { username: options.username })
    if (userExists) {
      return { errors: [{ message: 'duplicate', field: 'username' }] }
    }
    const hashedPassword = await argon2.hash(options.password)
    const user = await em.create(User, { username: options.username, password: hashedPassword })

    em.persistAndFlush(user)

    // expression-session - sets the cookie
    req.session.userId = user.id

    return { user }
  }

  @Mutation(() => UserResponse)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx()
    { em, req }: MyContext,
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username })
    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: 'that username does not exist',
          },
        ],
      }
    }

    const valid = await argon2.verify(user.password, options.password)
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password',
          },
        ],
      }
    }

    // expression-session - sets the cookie
    req.session.userId = user.id

    return { user }
  }
}
