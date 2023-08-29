import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/lanes')
  async getLanes(): Promise<any> {
    return this.appService.getLanes();
  }

  @Get('/api/lanes/:id/cards')
  getCardsForLane(@Param('id') laneId: string): Promise<any> {
    return this.appService.getCardsForLane(laneId);
  }

  @Post('/api/cards')
  async createCard(@Body() cardData: any): Promise<any> {
    return this.appService.createCard(cardData);
  }

  @Put('/api/cards/:id')
  async updateCard(
    @Param('id') id: string,
    @Body() updatedCard: any
  ): Promise<any> {
    return this.appService.updateCard(id, updatedCard);
  }

  @Delete('/api/cards/:id')
  async deleteCard(@Param('id') id: string): Promise<any> {
    return this.appService.deleteCard(id);
  }

}
