import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  getHello(): string {
    return 'This is the GRPC server!';
  }
}
