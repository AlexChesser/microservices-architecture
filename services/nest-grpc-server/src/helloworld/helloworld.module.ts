import { Module } from '@nestjs/common';
import { HelloWorldController } from './helloworld.controller';
import { HelloWorldService } from './helloworld.service';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldService],
})
export class HelloWorldModule {}
