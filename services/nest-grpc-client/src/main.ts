import { NestFactory } from '@nestjs/core';
import { HeroClientModule } from './hero-client/heroclient.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroClientModule);
  await app.listen(3000);
}
bootstrap();
