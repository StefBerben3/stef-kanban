import { Injectable } from '@nestjs/common';
import { Lane } from 'src/modules/lane/dto/lane';
import { LaneRepository } from './lane.repository';

@Injectable()
export class LaneService {
  constructor(private readonly laneRepository: LaneRepository) {}

  getLanes(): Promise<Lane[]> {
    return this.laneRepository.getLanes();
  }

  getCardsForLane(laneId: string) {
    return this.laneRepository.getCardsForLane(laneId);
  }
}
