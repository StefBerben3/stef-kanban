import { Injectable } from '@nestjs/common';
import { Card } from 'src/dto/card';
import { Lane } from 'src/dto/lane';
import { LaneRepository } from './lane.repository';

@Injectable()
export class LaneService {
  constructor(private readonly repository: LaneRepository) {}

  getLanes(): Promise<Lane[]> {
    return this.repository.getLanes();
  }

  getCardsForLane(laneId: string): Promise<Card[]> {
    return this.repository.getCardsForLane(laneId);
  }
}
