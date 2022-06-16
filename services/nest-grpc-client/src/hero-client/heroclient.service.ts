import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class HeroClientService implements OnModuleInit {
  private heroesService: HeroesService;
  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  async getHero(): Promise<string> {
    return await this.heroesService.findOne({ id: 1 });
  }
}
