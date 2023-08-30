import { Injectable } from '@nestjs/common';
import { card } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { Card } from 'src/dto/card';

@Injectable()
export class CardRepository {
  constructor(private readonly prisma: PrismaService) {}

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
