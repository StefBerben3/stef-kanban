import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardRepository } from './card.repository';

@Module({
  controllers: [CardController],
  providers: [PrismaService, CardService, CardRepository],
})
export class CardModule {}
