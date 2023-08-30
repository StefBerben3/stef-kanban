import { Injectable } from '@nestjs/common';
import { Card } from 'src/dto/card';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  createCard(cardData: Card): Promise<Card> {
    return this.cardRepository.createCard(cardData);
  }

  updateCard(id: string, updatedCard: Card): Promise<Card> {
    return this.cardRepository.updateCard(id, updatedCard);
  }

  deleteCard(id: string): Promise<Card> {
    return this.cardRepository.deleteCard(id);
  }
}
