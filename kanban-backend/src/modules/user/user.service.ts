import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/dto/user';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(userData: User): Promise<User> {
    return this.userRepository.createUser(userData);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
