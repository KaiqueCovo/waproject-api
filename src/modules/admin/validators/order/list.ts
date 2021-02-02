import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class ListValidator extends PaginationValidator {
  @IsString()
  @IsOptional()
  @IsIn(['name', 'description', 'price', 'amount'])
  @ApiProperty({ required: false, enum: ['name', 'description', 'price', 'amount'] })
  public orderBy: string;
}
