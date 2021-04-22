import { IsString, Length } from 'class-validator';

export class ClinicCreateDto {
  @IsString()
  @Length(1, 254)
  name: string;
}
