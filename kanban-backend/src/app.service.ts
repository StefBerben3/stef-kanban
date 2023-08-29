import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getLanes(): Promise<any> {
    return  this.prisma.client.lane.findMany();
  }

  async getCardsForLane(laneId: string): Promise<any> {
    const cards = await this.prisma.client.card.findMany({
      where: {
        laneId: laneId,
      },
    });

    return cards;
  }

 async createCard(cardData: any): Promise<any> {
    const createdCard = await this.prisma.card.create({
      data: {
        taskName: cardData.name,
        laneId: cardData.laneId,
        taskDescription: cardData.description,
        taskPriority: cardData.priority,
        taskassignee: cardData.assignee,
      },
    });

    return createdCard;
  }

  async updateCard(id: string, updatedCard: any): Promise<any> {

    return this.prisma.card.update({
      where: { id: id },
      data: {
        taskName: updatedCard.name,
        laneId: updatedCard.laneId,
        taskDescription: updatedCard.description,
        taskPriority: updatedCard.priority,
        taskAssignee: updatedCard.assignee,
      },
    });
  }
  

  async deleteCard(id: string): Promise<any> {
    return this.prisma.card.delete({
      where: { id: id },
    });
  }


}
