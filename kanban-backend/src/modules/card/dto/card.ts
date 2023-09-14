import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { SelectCard } from 'src/modules/card/select/createCardSelect';
import { User } from '../../user/dto/user';

export class CardUpdate {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(40)
  taskName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  laneId: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2, {
    message: 'Description needs to be more than 2 characters',
  })
  @MaxLength(255)
  taskDescription: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  taskPriority: number;

  @ApiProperty({ type: User })
  @ValidateNested()
  @Type(() => User)
  user: User;
}

export class Card extends CardUpdate implements SelectCard {
  @ApiProperty()
  @IsString()
  id: string;
}
