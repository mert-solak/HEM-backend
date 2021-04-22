import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentCreateDto } from 'src/modules/equipment/dto/equipment-create.dto';
import { createError } from 'src/shared/helpers/server-error.helper';

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment) private readonly equipmentModel: typeof Equipment) {}

  create = async (dto: EquipmentCreateDto): Promise<Equipment> => {
    const entity = this.equipmentModel.build();

    entity.name = dto.name;
    entity.quantity = dto.quantity;
    entity.price = dto.price;
    entity.usageRatio = dto.usageRatio;
    entity.receiptDate = dto.receiptDate;
    entity.clinicId = dto.clinicId;

    try {
      await entity.save();
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }

    return entity;
  };
}
