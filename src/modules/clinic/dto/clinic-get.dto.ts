import { IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class ClinicGetDto {
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  id: string;
}
