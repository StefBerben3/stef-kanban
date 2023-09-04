import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Card, CardUpdate } from 'src/dto/card';
import { CardService } from './card.service';

@Controller()
export class CardController {
  public constructor(private readonly cardService: CardService) {}

  @Post('/api/cards')
  @ApiOkResponse({
    type: () => Card,
  })
  createCard(
    @Body()
    cardData: CardUpdate,
  ): Promise<Card> {
    return this.cardService.createCard(cardData);
  }

  @Put('/api/cards/:id')
  @ApiOkResponse({
    type: () => Card,
  })
  updateCard(
    @Param('id') id: string,
    @Body() updatedCard: CardUpdate,
  ): Promise<Card> {
    return this.cardService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  deleteCard(@Param('id') id: string): Promise<Card> {
    return this.cardService.deleteCard(id);
  }
}
