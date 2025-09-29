import { Test, TestingModule } from '@nestjs/testing';
import { HexExampleController } from './hex-example.controller';

describe('HexExampleController', () => {
  let controller: HexExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HexExampleController],
    }).compile();

    controller = module.get<HexExampleController>(HexExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
