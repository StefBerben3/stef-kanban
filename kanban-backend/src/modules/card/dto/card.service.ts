import { Injectable } from '@nestjs/common';
import { CardUpdate } from 'src/modules/card/dto/card';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  createCard(cardData: CardUpdate) {
    return this.cardRepository.createCard(cardData);
  }

  async updateCard(id: string, updatedCard: CardUpdate) {
    updatedCard.taskPriority = parseInt(
      updatedCard.taskPriority as unknown as string,
      10,
    );

    return await this.cardRepository.updateCard(id, updatedCard);
  }

  deleteCard(id: string) {
    return this.cardRepository.deleteCard(id);
  }
}
