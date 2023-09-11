import { Injectable } from '@nestjs/common';
import { card } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { Lane } from 'src/modules/lane/dto/lane';

@Injectable()
export class LaneRepository {
  constructor(private readonly prisma: PrismaService) {}

  getLanes(): Promise<Lane[]> {
    return this.prisma.lane.findMany();
  }

  getCardsForLane(laneId: string): Promise<card[]> {
    return this.prisma.card.findMany({
      where: {
        laneId: laneId,
      },
      include: {
        user: true,
      },
    });
  }
}
