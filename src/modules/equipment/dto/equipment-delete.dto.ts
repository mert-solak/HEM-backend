import { IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class EquipmentDeleteDto {
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(1)
  id: number;
}
