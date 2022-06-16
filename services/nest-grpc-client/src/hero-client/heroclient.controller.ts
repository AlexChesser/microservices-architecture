import { Controller, Get } from '@nestjs/common';
import { HeroClientService } from './heroclient.service';

@Controller()
export class HeroController {
  constructor(private readonly appService: HeroClientService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHero();
  }
}
