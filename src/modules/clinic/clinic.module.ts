import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicController } from 'src/modules/clinic/clinic.controller';
import { ClinicService } from 'src/modules/clinic/clinic.service';

@Module({
  imports: [SequelizeModule.forFeature([Clinic])],
  providers: [ClinicService],
  controllers: [ClinicController],
  exports: [ClinicService],
})
export class ClinicModule {}
