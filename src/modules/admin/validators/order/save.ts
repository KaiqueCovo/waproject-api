import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

export class SaveValidator {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string', maxLength: 255 })
  public name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  @ApiProperty({ required: true, type: 'string', maxLength: 1000 })
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true, type: 'number' })
  public price: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true, type: 'number' })
  public amount: number;
}
