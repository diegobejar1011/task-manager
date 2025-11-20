import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envsValues } from './core/config/getEnvs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envsValues.port ?? 3000);
}
bootstrap();
