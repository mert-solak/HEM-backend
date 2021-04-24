import { Transform } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class ClinicGetDto {
  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(0)
  id: string;
}
