import { IsNumber, IsString, Min, Length, IsOptional } from 'class-validator';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { OrderBy } from 'src/shared/types/dto.type';

export class ClinicLookupDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  limit: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ofset: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  sortBy: keyof Omit<Clinic, 'id' | 'equipments'>;

  @IsOptional()
  @IsString()
  @Length(1, 4)
  orderBy: OrderBy;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  search: string;
}
