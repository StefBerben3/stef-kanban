import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { SelectUser } from '../select/userSelect';

export class User implements SelectUser {
  @ApiProperty({
    nullable: true,
  })
  @IsOptional()
  id: string;
  @ApiProperty({
    nullable: true,
  })
  @IsOptional()
  @MinLength(2)
  @MaxLength(40)
  name: string;
  @ApiProperty({
    nullable: true,
  })
  @IsOptional()
  @MinLength(2)
  @MaxLength(40)
  lastname: string;
}
