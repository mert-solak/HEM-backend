import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

import { loggerConfig } from 'src/shared/configs/logger.config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { logger: loggerConfig.loggerLevel });

  await app.listen(3000);
};

bootstrap();
