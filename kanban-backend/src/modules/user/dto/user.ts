import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SelectUser } from '../select/createUserSelect';

export class User implements SelectUser {
  @ApiProperty({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  id: string;
  @ApiProperty({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(40)
  name: string;
  @ApiProperty({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(40)
  lastname: string;
}
