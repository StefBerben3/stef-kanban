import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from '../user/user.service';
import { CardUpdate } from './dto/card';
import { selectCard } from './select/cardSelect';

@Injectable()
export class CardRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async createCard(cardData: CardUpdate, userId: string) {
    return this.prisma.card.create({
      data: {
        taskName: cardData.taskName,
        taskDescription: cardData.taskDescription,
        taskPriority: cardData.taskPriority,
        lane: {
          connect: {
            id: cardData.laneId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
      ...selectCard,
    });
  }

  async updateCard(id: string, updatedCard: CardUpdate, userId: string) {
    return this.prisma.card.update({
      where: { id: id },
      data: {
        taskName: updatedCard.taskName,
        taskDescription: updatedCard.taskDescription,
        taskPriority: updatedCard.taskPriority,
        lane: {
          connect: {
            id: updatedCard.laneId,
          },
        },
        user: {
          connect: {
            id: userId,
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
