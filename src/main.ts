import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app.module';
import { GlobalExceptionFilter } from 'src/shared/filters/global-exception.filter';
import { env } from 'src/shared/utils/env.utils';
import { loggerConfig } from 'src/shared/configs/logger.config';
import { validationPipe } from 'src/shared/pipes/validation.pipe';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { logger: loggerConfig.loggerLevel });

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalPipes(validationPipe);

  await app.listen(env.port, env.host);
};

bootstrap();
