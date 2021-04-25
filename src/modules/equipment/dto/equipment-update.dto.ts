import { IsNumber, IsString, Length, Min, Max, IsOptional, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class EquipmentUpdateDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  name?: string;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0.01)
  price?: number;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  @Max(100)
  usageRatio?: number;

  @IsOptional()
  @IsDateString()
  receiptDate?: string;
}
