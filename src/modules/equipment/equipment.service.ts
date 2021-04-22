import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentCreateDto } from 'src/modules/equipment/dto/equipment.create.dto';

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment) private readonly equipmentModel: typeof Equipment) {}

  create = async (dto: EquipmentCreateDto): Promise<Equipment> => {
    const entity = this.equipmentModel.build();

    entity.name = dto.name;

    try {
      await entity.save();
    } catch (error) {
      //handle error
    }

    return entity;
  };
}
