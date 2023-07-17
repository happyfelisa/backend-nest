import { Test, TestingModule } from '@nestjs/testing';
import { MineralesController } from './minerales.controller';

describe('MineralesController', () => {
  let controller: MineralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MineralesController],
    }).compile();

    controller = module.get<MineralesController>(MineralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
