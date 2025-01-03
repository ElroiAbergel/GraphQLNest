import { Injectable } from '@nestjs/common';
import { UserInput } from './user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async create(input: UserInput): Promise<Users> {
    const user = new Users();
    user._id = uuid.v4();
    user.username = input.username;
    user.password = input.password;
    return this.userRepository.save(user);
  }
}
