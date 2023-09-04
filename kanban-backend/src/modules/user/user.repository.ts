import { Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { User } from 'src/dto/user';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  createUser(userData: User): Promise<user> {
    return this.prisma.user.create({
      data: {
        name: userData.name,
        lastname: userData.lastname,
      },
    });
  }

  getUsers(): Promise<user[]> {
    return this.prisma.user.findMany({});
  }
}
