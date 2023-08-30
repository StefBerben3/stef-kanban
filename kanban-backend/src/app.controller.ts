import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Card } from './dto/card';
import { Lane } from './dto/lane';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/lanes')
  getLanes(): Promise<Lane[]> {
    return this.appService.getLanes();
  }

  @Get('/api/lanes/:id/cards')
  getCardsForLane(@Param('id') laneId: string): Promise<Card[]> {
    return this.appService.getCardsForLane(laneId);
  }

  @Post('/api/cards')
  createCard(
    @Body()
    cardData: Card,
  ): Promise<Card> {
    console.log(cardData);
    return this.appService.createCard(cardData);
  }

  @Put('/api/cards/:id')
  updateCard(
    @Param('id') id: string,
    @Body() updatedCard: Card,
  ): Promise<Card> {
    return this.appService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  deleteCard(@Param('id') id: string): Promise<Card> {
    return this.appService.deleteCard(id);
  }
}
