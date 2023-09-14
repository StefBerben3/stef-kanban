import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { CardController } from './card.controller';
import { CardRepository } from './card.repository';
import { CardService } from './card.service';

@Module({
  controllers: [CardController],
  providers: [
    PrismaService,
    CardService,
    CardRepository,
    UserService,
    UserRepository,
  ],
})
export class CardModule {}
