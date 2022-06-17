import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroController } from './heroclient.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'HERO_PACKAGE', ...grpcClientOptions }]),
  ],
  controllers: [HeroController],
})
export class HeroClientModule {}