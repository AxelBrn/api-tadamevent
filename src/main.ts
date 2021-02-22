import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import Mysql from './db.config';
import * as express from 'express';
import { join } from 'path';

['./.env.local', './.env'].forEach((path) => dotenv.config({ path }));

async function bootstrap() {
  await Mysql.createInstance();
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Tadam'Event API")
    .setDescription('Nest JS API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(express.static(join(process.cwd(), 'public')));
  SwaggerModule.setup('/api/v1/docs', app, document, {
    customSiteTitle: "Tadam'Event API",
    customCssUrl: '/css/swagger-custom.css',
    customJs: '/js/inject-js.js',
  });

  await app.listen(process.env.PORT);
}
bootstrap();
