import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envsValues } from './core/config/getEnvs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Task-Manager')
    .setDescription('API Rest to manage tasks')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalInterceptors(new ResponseInterceptor());
  
  await app.listen(envsValues.port ?? 3000);
}
bootstrap();
