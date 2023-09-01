import { Injectable } from '@nestjs/common';
import { Card, CardUpdate } from 'src/dto/card';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  createCard(cardData: CardUpdate): Promise<Card> {
    return this.cardRepository.createCard(cardData);
  }

  async updateCard(id: string, updatedCard: CardUpdate): Promise<Card> {
    updatedCard.taskPriority = parseInt(
      updatedCard.taskPriority as unknown as string,
      10,
    );

    return await this.cardRepository.updateCard(id, updatedCard);
  }

  deleteCard(id: string): Promise<Card> {
    return this.cardRepository.deleteCard(id);
  }
}
