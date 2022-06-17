import { NestFactory } from '@nestjs/core';
import { HelloWorldModule } from './helloworld/helloworld.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // REST service go here
  const app = await NestFactory.create(HelloWorldModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero', // ['hero', 'hero2']
      protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);

  // const grpc = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   HelloWorldModule,
  //   {
  //     transport: Transport.GRPC,
  //     options: {
  //       package: 'hero',
  //       protoPath: join(__dirname, 'hero/hero.proto'),
  //     },
  //   },
  // );
  // await grpc.listen();
}
bootstrap();
