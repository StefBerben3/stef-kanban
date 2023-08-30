import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { LaneController } from './lane.controller';
import { LaneRepository } from './lane.repository';
import { LaneService } from './lane.service';

@Module({
  controllers: [LaneController],
  providers: [PrismaService, LaneService, LaneRepository],
})
export class laneModule {}
