import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';

@Injectable()
export class ClinicService {
  constructor(@InjectModel(Clinic) private readonly clinicModel: typeof Clinic) {}

  create = async (dto: ClinicCreateDto): Promise<Clinic> => {
    const entity = this.clinicModel.build();

    entity.name = dto.name;

    try {
      await entity.save();
    } catch (error) {
      //handle error
    }

    return entity;
  };
}
