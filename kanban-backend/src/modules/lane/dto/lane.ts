import { ApiProperty } from '@nestjs/swagger';
import { SelectLane } from '../select/laneSelect';

export class Lane implements SelectLane {
  @ApiProperty()
  id: string;
  @ApiProperty()
  lane: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
