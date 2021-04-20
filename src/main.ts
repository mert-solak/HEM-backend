import * as dotenv from 'dotenv';
dotenv.config();
import * as envLoader from 'load-env-var';

import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app.module';
import { loggerConfig } from 'src/shared/configs/logger.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { logger: loggerConfig.loggerLevel });

  await app.listen(envLoader.loadNumber('PORT'), envLoader.loadString('HOST'));
};

bootstrap();
