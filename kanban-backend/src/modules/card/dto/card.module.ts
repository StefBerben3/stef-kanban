import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CardController } from './card.controller';
import { CardRepository } from './card.repository';
import { CardService } from './card.service';

@Module({
  controllers: [CardController],
  providers: [PrismaService, CardService, CardRepository],
})
export class CardModule {}
