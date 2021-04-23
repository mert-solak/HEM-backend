import { IsNumber, IsOptional, IsString, Length, Min } from 'class-validator';

export class ClinicUpdateDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsOptional()
  @IsString()
  @Length(1, 254)
  name?: string;
}
