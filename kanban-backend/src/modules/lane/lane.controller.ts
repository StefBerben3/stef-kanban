import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Card } from 'src/dto/card';
import { Lane } from 'src/dto/lane';
import { LaneService } from './lane.service';

@Controller()
export class LaneController {
  constructor(private readonly laneService: LaneService) {}

  @Get('/api/lanes')
  @ApiOkResponse({
    type: () => Lane,
    isArray: true,
  })
  getLanes(): Promise<Lane[]> {
    return this.laneService.getLanes();
  }

  @Get('/api/lanes/:id/cards')
  @ApiOkResponse({
    type: () => Card,
    isArray: true,
  })
  getCardsForLane(@Param('id') laneId: string): Promise<Card[]> {
    return this.laneService.getCardsForLane(laneId);
  }
}
