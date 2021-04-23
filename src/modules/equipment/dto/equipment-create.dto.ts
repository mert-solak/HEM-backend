import { IsNumber, IsString, Length, Min, Max, IsOptional, IsDateString } from 'class-validator';

export class EquipmentCreateDto {
  @IsString()
  @Length(1, 254)
  name: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0.01)
  price: number;

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
