import { IsNumber, IsString, Length, Min, Max, IsOptional, IsDateString } from 'class-validator';

export class EquipmentUpdateDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  name?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  usageRatio?: number;

  @IsOptional()
  @IsDateString()
  receiptDate?: string;
}
