import { SequelizeModuleOptions } from '@nestjs/sequelize';

import { env } from 'src/shared/utils/env.utils';

export const databaseConfig = {
  dialect: 'postgres',
  host: env.dbHost,
  port: env.dbPort,
  logging: false,
  native: false,
  define: {
    underscored: false,
    createdAt: true,
    updatedAt: true,
  },
  database: env.dbName,
  username: env.dbUserName,
  password: env.dbPassword,
  models: ['modules/**/entities/*.{js,ts}'],
  sync: {
    force: true,
    alter: true,
  },
  synchronize: true,
  autoLoadModels: true,
} as SequelizeModuleOptions;
