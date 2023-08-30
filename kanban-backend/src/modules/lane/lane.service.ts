import { Injectable } from '@nestjs/common';
import { Card } from 'src/dto/card';
import { Lane } from 'src/dto/lane';
import { LaneRepository } from './lane.repository';

@Injectable()
export class LaneService {
  constructor(private readonly laneRepository: LaneRepository) {}

  getLanes(): Promise<Lane[]> {
    return this.laneRepository.getLanes();
  }

  getCardsForLane(laneId: string): Promise<Card[]> {
    return this.laneRepository.getCardsForLane(laneId);
  }
}
