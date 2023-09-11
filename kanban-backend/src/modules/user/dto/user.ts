import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class User {
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
  name: string;
  @ApiProperty({
    nullable: true,
  })
  @IsString()
  @IsOptional()
  lastname?: string;
}
