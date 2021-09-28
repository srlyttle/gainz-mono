import { MyContext } from 'src/types'
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Split } from '../entities/Split'

@Resolver()
export class SplitResolver {
  @Query(() => [Split])
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  splits(@Ctx() { em }: MyContext): Promise<Split[]> {
    return em.find(Split, {})
  }
  @Query(() => Split, { nullable: true })
  split(
    @Arg('id', () => Int) id: number,
    @Ctx()
    { em }: MyContext,
  ): Promise<Split | null> {
    return em.findOne(Split, { id })
  }

  @Mutation(() => Split)
  async createSplit(
    @Arg('name') name: string,
    @Arg('workouts') workouts: number,
    @Ctx()
    { em }: MyContext,
  ): Promise<Split> {
    const split = em.create(Split, { name, workouts })
    await em.persistAndFlush(split)
    return split
  }

  @Mutation(() => Split, { nullable: true })
  async updateSplit(
    @Arg('id') id: number,
    @Arg('name') name: string,
    @Arg('workouts') workouts: number,
    @Ctx()
    { em }: MyContext,
  ): Promise<Split | null> {
    const split = await em.findOne(Split, { id })
    if (!split) {
      return null
    }
    if (typeof name !== 'undefined' && typeof workouts !== 'undefined') {
      split.name = name
      split.workouts = workouts

      await em.persistAndFlush(split)
    }
    return split
  }

  @Mutation(() => Boolean)
  async deleteSplit(
    @Arg('id') id: number,
    @Ctx()
    { em }: MyContext,
  ): Promise<boolean> {
    try {
      await em.nativeDelete(Split, { id })
      return true
    } catch (error) {
      return false
    }
  }
}
