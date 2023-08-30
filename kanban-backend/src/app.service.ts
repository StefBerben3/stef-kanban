import { Injectable } from '@nestjs/common';
import { AppRepository } from '../src/app.repository';
import { Card } from './dto/card';
import { Lane } from './dto/lane';

@Injectable()
export class AppService {
  constructor(private readonly repository: AppRepository) {}

  getLanes(): Promise<Lane[]> {
    return this.repository.getLanes();
  }

  getCardsForLane(laneId: string): Promise<Card[]> {
    return this.repository.getCardsForLane(laneId);
  }

  createCard(cardData: Card): Promise<Card> {
    return this.repository.createCard(cardData);
  }

  updateCard(id: string, updatedCard: Card): Promise<Card> {
    return this.repository.updateCard(id, updatedCard);
  }

  deleteCard(id: string): Promise<Card> {
    return this.repository.deleteCard(id);
  }
}
