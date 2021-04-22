import { IsString, Length } from 'class-validator';

export class EquipmentCreateDto {
  @IsString()
  @Length(1, 254)
  name: string;
}
