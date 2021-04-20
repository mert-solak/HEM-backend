import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClinicModule } from 'src/modules/clinic/clinic.module';
import { databaseConfig } from 'src/shared/configs/database.config';

@Module({
  imports: [SequelizeModule.forRoot(databaseConfig), ClinicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
