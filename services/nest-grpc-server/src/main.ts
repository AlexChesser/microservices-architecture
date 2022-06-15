import { NestFactory } from '@nestjs/core';
import { HelloWorldModule } from './helloworld/helloworld.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // REST service go here
  const helloworld = await NestFactory.create(HelloWorldModule);
  await helloworld.listen(3000);

  const grpc = await NestFactory.createMicroservice<MicroserviceOptions>(
    HelloWorldModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto'),
      },
    },
  );
}
bootstrap();
