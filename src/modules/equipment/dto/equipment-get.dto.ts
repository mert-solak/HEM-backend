import { Transform } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class EquipmentGetDto {
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(1)
  id: number;
}
