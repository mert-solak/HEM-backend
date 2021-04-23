import { IsNumber, IsString, Min, Length, IsOptional, ArrayUnique, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Transform } from 'class-transformer';

import { SortOrder } from 'src/shared/types/dto.type';
import { SortableField, SearchableField } from 'src/shared/types/equipment.type';

export class EquipmentLookupDto {
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  limit?: number;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  offset?: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  sortBy?: SortableField;

  @IsOptional()
  @IsString()
  @Length(1, 4)
  sortOrder?: SortOrder;

  @IsOptional()
  @Transform(({ value }) => value.split(',').map((value: SearchableField) => value.trim()))
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(64)
  @Length(1, 254, { each: true })
  search?: SearchableField[];
}
