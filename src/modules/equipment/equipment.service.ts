import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { isDefined } from 'class-validator';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentCreateDto } from 'src/modules/equipment/dto/equipment-create.dto';
import { EquipmentDeleteDto } from 'src/modules/equipment/dto/equipment-delete.dto';
import { EquipmentGetDto } from 'src/modules/equipment/dto/equipment-get.dto';
import { EquipmentLookup } from 'src/shared/types/equipment.type';
import { EquipmentLookupDto } from 'src/modules/equipment/dto/equipment-lookup.dto';
import { EquipmentUpdateDto } from 'src/modules/equipment/dto/equipment-update.dto';
import { ServerError } from 'src/shared/utils/error.utils';
import { createError } from 'src/shared/helpers/server-error.helper';
import { createSearchQuery, createSortQuery } from 'src/shared/helpers/sequelize.helper';
import { includableFields, searchableFields } from 'src/shared/configs/equipment.config';

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment) private readonly equipmentModel: typeof Equipment) {}

  create = async (dto: EquipmentCreateDto): Promise<Equipment> => {
    const entity = this.equipmentModel.build();

    entity.name = dto.name;
    entity.quantity = dto.quantity;
    entity.price = dto.price;
    entity.usageRatio = dto.usageRatio;
    entity.receiptDate = new Date(dto.receiptDate);
    entity.clinicId = dto.clinicId;

    try {
      await entity.save();
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }

    return entity;
  };

  lookup = async (dto: EquipmentLookupDto): Promise<EquipmentLookup> => {
    const query: any = {};
    const where: any = {};

    if (isDefined(dto.search)) {
      where[Op.or] = createSearchQuery(searchableFields, dto.search);
    }

    if (isDefined(dto.limit)) {
      query.limit = dto.limit;
    }

    if (isDefined(dto.offset)) {
      query.offset = dto.offset;
    }

    if (isDefined(dto.sortBy) && isDefined(dto.sortOrder)) {
      query.order = createSortQuery(dto.sortBy, dto.sortOrder);
    } else {
      query.order = createSortQuery('createdAt', 'DESC');
    }

    query.where = where;
    query.include = includableFields;

    try {
      return await this.equipmentModel.findAndCountAll(query);
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }
  };

  update = async (dto: EquipmentUpdateDto): Promise<Equipment> => {
    const entity = await this.equipmentModel.findByPk(dto.id);

    if (isDefined(dto.name)) {
      entity.name = dto.name;
    }

    if (isDefined(dto.quantity)) {
      entity.quantity = dto.quantity;
    }

    if (isDefined(dto.price)) {
      entity.price = dto.price;
    }

    if (isDefined(dto.usageRatio)) {
      entity.usageRatio = dto.usageRatio;
    }

    if (isDefined(dto.receiptDate)) {
      entity.receiptDate = new Date(dto.receiptDate);
    }

    try {
      await entity.save();
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }

    return entity;
  };

  delete = async (dto: EquipmentDeleteDto): Promise<void> => {
    try {
      const entity = await this.equipmentModel.findByPk(dto.id);

      if (isDefined(entity)) {
        await entity.destroy();
      } else {
        throw new ServerError('DATA_NOT_EXISTS', { moduleName: 'Equipment', relationalModule: 'Clinic' });
      }
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }
  };

  get = async (dto: EquipmentGetDto): Promise<Equipment> => {
    try {
      const entity = await this.equipmentModel.findByPk(dto.id, { include: includableFields });

      return entity;
    } catch (error) {
      throw createError(error, { moduleName: 'Equipment', relationalModule: 'Clinic' });
    }
  };
}
