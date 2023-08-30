import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Card } from 'src/dto/card';

Controller();
export class CardController {
  CardService: any;
  appService: any;

  @Post('/api/cards')
  createCard(
    @Body()
    cardData: Card,
  ): Promise<Card> {
    console.log(cardData);
    return this.CardService.createCard(cardData);
  }

  @Put('/api/cards/:id')
  updateCard(
    @Param('id') id: string,
    @Body() updatedCard: Card,
  ): Promise<Card> {
    return this.CardService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  deleteCard(@Param('id') id: string): Promise<Card> {
    return this.CardService.deleteCard(id);
  }
}
