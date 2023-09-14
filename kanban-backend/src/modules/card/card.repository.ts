import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CardUpdate } from 'src/modules/card/dto/card';
import { selectCard } from './select/createCardSelect';

@Injectable()
export class CardRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCard(cardData: CardUpdate, userId: string) {
    return this.prisma.card.create({
      data: {
        lane: {
          connect: {
            id: cardData.laneId,
          },
        },
        taskName: cardData.taskName,
        taskDescription: cardData.taskDescription,
        taskPriority: cardData.taskPriority,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      ...selectCard,
    });
  }

  updateCard(id: string, updatedCard: CardUpdate) {
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
      ...selectCard,
    });
  }

  deleteCard(id: string) {
    return this.prisma.card.delete({
      where: { id: id },
      ...selectCard,
    });
  }
}
