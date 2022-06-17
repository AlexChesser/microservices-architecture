import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { HeroesServiceClient } from 'src/generated-proto/hero/HeroesService';

@Injectable()
export class HeroClientService implements OnModuleInit {
  private heroesService: HeroesServiceClient;
  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.heroesService = this.client.getService<HeroesServiceClient>(
      'HeroesServiceClient',
    );
  }

  getHero(): string {
    this.heroesService.findOne({ id: 1 }, (arg) => {
      console.log(arg);
    });
    return 'seeking hero';
  }
}
