import { Test, TestingModule } from '@nestjs/testing';
import { MineralesService } from './minerales.service';

describe('MineralesService', () => {
  let service: MineralesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MineralesService],
    }).compile();

    service = module.get<MineralesService>(MineralesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
