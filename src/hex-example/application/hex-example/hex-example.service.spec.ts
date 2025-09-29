import { Test, TestingModule } from '@nestjs/testing';
import { HexExampleService } from './hex-example.service';

describe('HexExampleService', () => {
  let service: HexExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HexExampleService],
    }).compile();

    service = module.get<HexExampleService>(HexExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
