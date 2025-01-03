import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Users } from './user.entity';
import { UserInput } from './user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  @Query(() => [Users])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => Users)
  async createUser(@Args('input') input: UserInput) {
    return await this.userService.create(input);
  }
}
