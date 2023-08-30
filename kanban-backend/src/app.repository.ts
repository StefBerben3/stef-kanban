import { Injectable } from '@nestjs/common';
import { card } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Card } from './dto/card';
import { Lane } from './dto/lane';

@Injectable()
export class AppRepository {
  constructor(private readonly prisma: PrismaService) {}

  getLanes(): Promise<Lane[]> {
    return this.prisma.lane.findMany();
  }

  getCardsForLane(laneId: string): Promise<card[]> {
    return this.prisma.card.findMany({
      where: {
        laneId: laneId,
      },
    });
  }

  createCard(cardData: Card): Promise<card> {
    return this.prisma.card.create({
      data: {
        laneId: cardData.laneId,
        taskName: cardData.taskName,
        taskDescription: cardData.taskDescription,
        taskPriority: cardData.taskPriority,
        taskAssignee: cardData.taskAssignee,
      },
    });
  }

  updateCard(id: string, updatedCard: Card): Promise<card> {
    return this.prisma.card.update({
      where: { id: id },
      data: {
        taskName: updatedCard.taskName,
        laneId: updatedCard.laneId,
        taskDescription: updatedCard.taskDescription,
        taskPriority: updatedCard.taskPriority,
        taskAssignee: updatedCard.taskAssignee,
      },
    });
  }

  deleteCard(id: string): Promise<card> {
    return this.prisma.card.delete({
      where: { id: id },
    });
  }
}
