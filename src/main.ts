import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
  await app.listen(3000);
};

bootstrap();
