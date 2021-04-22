import * as envLoader from 'load-env-var';

import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig = {
  dialect: 'postgres',
  host: envLoader.loadString('DB_HOST'),
  port: envLoader.loadNumber('DB_PORT'),
  logging: false,
  native: false,
  define: {
    underscored: false,
    createdAt: true,
    updatedAt: true,
  },
  database: envLoader.loadString('DB_NAME'),
  username: envLoader.loadString('DB_USERNAME'),
  password: envLoader.loadString('DB_PASSWORD'),
  models: ['modules/**/entities/*.{js,ts}'],
  sync: {
    force: true,
    alter: true,
  },
  synchronize: true,
  autoLoadModels: true,
} as SequelizeModuleOptions;
