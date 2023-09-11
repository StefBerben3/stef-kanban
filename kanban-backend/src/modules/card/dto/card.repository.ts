import { Injectable } from '@nestjs/common';
import { card } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CardUpdate } from 'src/modules/card/dto/card';

@Injectable()
export class CardRepository {
  constructor(private readonly prisma: PrismaService) {}

  createCard(cardData: CardUpdate): Promise<card> {
    return this.prisma.card.create({
      data: {
        laneId: cardData.laneId,
        taskName: cardData.taskName,
        taskDescription: cardData.taskDescription,
        taskPriority: cardData.taskPriority,
      },
    });
  }

  updateCard(id: string, updatedCard: CardUpdate): Promise<card> {
    return this.prisma.card.update({
      where: { id: id },
      data: {
        taskName: updatedCard.taskName,
        lane: {
          connect: {
            id: updatedCard.laneId,
          },
        },
        taskDescription: updatedCard.taskDescription,
        taskPriority: updatedCard.taskPriority,
        user:
          updatedCard.user.id === undefined ||
          updatedCard.user.id === null ||
          updatedCard.user.id.length < 1
            ? {
                create: {
                  name: updatedCard.user.name,
                  lastname: updatedCard.user.lastname,
                },
              }
            : {
                connect: {
                  id: updatedCard.user.id,
                },
              },
      },
    });
  }

  deleteCard(id: string): Promise<card> {
    return this.prisma.card.delete({
      where: { id: id },
    });
  }
}
