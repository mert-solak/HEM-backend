import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClinicModule } from 'src/modules/clinic/clinic.module';
import { EquipmentModule } from 'src/modules/equipment/equipment.module';

import { databaseConfig } from 'src/shared/configs/database.config';

@Module({
  imports: [SequelizeModule.forRoot(databaseConfig), ClinicModule, EquipmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
