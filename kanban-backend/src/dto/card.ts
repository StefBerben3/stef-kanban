import { ApiProperty } from '@nestjs/swagger';

export class CardUpdate {
  @ApiProperty()
  taskName: string;
  @ApiProperty()
  laneId: string;
  @ApiProperty()
  taskDescription: string;
  @ApiProperty()
  taskAssignee: string;
  @ApiProperty()
  taskPriority: number;
}

export class Card extends CardUpdate {
  @ApiProperty()
  id: string;
}
