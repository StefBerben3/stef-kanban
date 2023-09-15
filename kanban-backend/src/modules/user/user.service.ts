import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/dto/user';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createOrGetUser(userData: User): Promise<User> {
    const existingUser = await this.userRepository.getUserById(
      userData.id ?? '',
    );

    if (existingUser === null) {
      return this.userRepository.createUser(userData);
    }

    return existingUser;
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
