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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/lanes')
  async getLanes(): Promise<Lane> {
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
  async updateCard(
    @Param('id') id: string,
    @Body() updatedCard: Card,
  ): Promise<Card> {
    return this.appService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  async deleteCard(@Param('id') id: string): Promise<Card> {
    return this.appService.deleteCard(id);
  }
}
