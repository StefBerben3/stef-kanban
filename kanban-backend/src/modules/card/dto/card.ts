import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { User } from '../../user/dto/user';

export class CardUpdate {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  @ApiProperty()
  taskName: string;
  @IsNotEmpty()
  @ApiProperty()
  laneId: string;
  @MinLength(3)
  @MaxLength(40)
  @ApiProperty()
  taskDescription: string;
  @ApiProperty()
  taskPriority: number;
  @ApiProperty({ type: () => User })
  @Type(() => User)
  user: User;
}

export class Card extends CardUpdate {
  @ApiProperty()
  id: string;
}
