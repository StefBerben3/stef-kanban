import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Card } from 'src/dto/card';
import { CardService } from './card.service';

@Controller()
export class CardController {
  public constructor(private readonly cardService: CardService) {}

  @Post('/api/cards')
  createCard(
    @Body()
    cardData: Card,
  ): Promise<Card> {
    return this.cardService.createCard(cardData);
  }

  @Put('/api/cards/:id')
  updateCard(
    @Param('id') id: string,
    @Body() updatedCard: Card,
  ): Promise<Card> {
    return this.cardService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  deleteCard(@Param('id') id: string): Promise<Card> {
    return this.cardService.deleteCard(id);
  }
}
