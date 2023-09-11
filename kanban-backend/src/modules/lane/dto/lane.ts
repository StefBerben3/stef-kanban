import { ApiProperty } from '@nestjs/swagger';

export class Lane {
  @ApiProperty()
  id: string;
  @ApiProperty()
  lane: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
