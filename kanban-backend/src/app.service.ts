import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Card } from './dto/card';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getLanes(): Promise<any> {
    return this.prisma.client.lane.findMany();
  }

  async getCardsForLane(laneId: string): Promise<Card[]> {
    return await this.prisma.client.card.findMany({
      where: {
        laneId: laneId,
      },
    });
  }

  async createCard(cardData: Card): Promise<Card> {
    return await this.prisma.card.create({
      data: {
        laneId: cardData.laneId,
        taskName: cardData.taskName,
        taskDescription: cardData.taskDescription,
        taskPriority: cardData.taskPriority,
        taskAssignee: cardData.taskAssignee,
      },
    });
  }

  async updateCard(id: string, updatedCard: Card): Promise<Card> {
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

  async deleteCard(id: string): Promise<Card> {
    return this.prisma.card.delete({
      where: { id: id },
    });
  }
}
