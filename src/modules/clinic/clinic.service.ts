import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { isDefined } from 'class-validator';
import { Op } from 'sequelize';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';
import { ClinicLookup } from 'src/shared/types/clinic.type';
import { ClinicLookupDto } from './dto/clinic-lookup.dto';
import { createError } from 'src/shared/helpers/server-error.helper';
import { createSearchQuery, createSortQuery } from 'src/shared/helpers/sequelize.helper';
import { searchableFields, includableFields } from 'src/shared/configs/clinic.config';
import { ClinicUpdateDto } from './dto/clinic-update.dto';

@Injectable()
export class ClinicService {
  constructor(@InjectModel(Clinic) private readonly clinicModel: typeof Clinic) {}

  create = async (dto: ClinicCreateDto): Promise<Clinic> => {
    const entity = this.clinicModel.build();

    entity.name = dto.name;

    try {
      await entity.save();
    } catch (error) {
      throw createError(error, { moduleName: 'Clinic', relationalModule: 'Equipment' });
    }

    return entity;
  };

  lookup = async (dto: ClinicLookupDto): Promise<ClinicLookup> => {
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
    }

    query.where = where;
    query.include = includableFields;

    try {
      return await this.clinicModel.findAndCountAll(query);
    } catch (error) {
      throw createError(error, { moduleName: 'Clinic', relationalModule: 'Equipment' });
    }
  };

  update = async (dto: ClinicUpdateDto): Promise<Clinic> => {
    const entity = await this.clinicModel.findByPk(dto.id);

    if (isDefined(dto.name)) {
      entity.name = dto.name;
    }

    try {
      await entity.save();
    } catch (error) {
      throw createError(error, { moduleName: 'Clinic', relationalModule: 'Equipment' });
    }

    return entity;
  };
}
