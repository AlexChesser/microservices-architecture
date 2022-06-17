import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    url: 'grpc-server:3000',
    protoPath: join(__dirname, '../../nest-grpc-server/src/hero/hero.proto'),
    loader: {
      keepCase: true,
      longs: Number,
      enums: String,
      defaults: false,
      arrays: true,
      objects: true,
      includeDirs: [join(__dirname, '../../nest-grpc-server/src/hero/')],
    },
  },
};
