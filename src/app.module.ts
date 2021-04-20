import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { databaseConfig } from 'src/shared/configs/database.config';

@Module({
  imports: [SequelizeModule.forRoot(databaseConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
