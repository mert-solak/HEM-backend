import { IsNumber, IsString, Length, Min, Max, IsOptional, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class EquipmentCreateDto {
  @IsString()
  @Length(1, 254)
  name: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(1)
  quantity: number;

  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0.01)
  price: number;

  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  @Max(100)
  usageRatio: number;

  @IsOptional()
  @IsDateString()
  receiptDate?: string;

  @IsNumber()
  @Min(0)
  clinicId: number;
}
