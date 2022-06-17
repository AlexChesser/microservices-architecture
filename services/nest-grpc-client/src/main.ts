import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { HeroModule } from './hero-client/hero.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
