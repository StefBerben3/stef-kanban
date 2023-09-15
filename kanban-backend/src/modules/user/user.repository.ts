import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { User } from 'src/modules/user/dto/user';
import { selectUser } from './select/userSelect';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  createUser(userData: User) {
    return this.prisma.user.create({
      data: {
        name: userData.name,
        lastname: userData.lastname,
      },
      ...selectUser,
    });
  }

  getUserById(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
      ...selectUser,
    });
  }

  getUsers(): Promise<user[]> {
    return this.prisma.user.findMany({
      ...selectUser,
    });
  }
}
