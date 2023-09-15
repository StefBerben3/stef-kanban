import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Usercontroller } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [Usercontroller],
  providers: [PrismaService, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
