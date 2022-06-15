import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './helloworld.controller';
import { HelloWorldService } from './helloworld.service';

describe('HelloWorldController', () => {
  let helloworldController: HelloWorldController;

  beforeEach(async () => {
    const helloworld: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService],
    }).compile();

    helloworldController =
      helloworld.get<HelloWorldController>(HelloWorldController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(helloworldController.getHello()).toBe('Hello World!');
    });
  });
});
