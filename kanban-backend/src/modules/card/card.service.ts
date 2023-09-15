import { Injectable } from '@nestjs/common';
import { CardUpdate } from 'src/modules/card/dto/card';
import { UserService } from '../user/user.service';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  constructor(
    private readonly cardRepository: CardRepository,
    private readonly userService: UserService,
  ) {}

  async createCard(cardData: CardUpdate) {
    const user = await this.userService.createOrGetUser(cardData.user);

    return this.cardRepository.createCard(cardData, user.id);
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
