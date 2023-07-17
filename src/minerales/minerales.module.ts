import { Module } from '@nestjs/common';
import { MineralesController } from './minerales.controller';
import { MineralesService } from './minerales.service';

@Module({
  controllers: [MineralesController],
  providers: [MineralesService]
})
export class MineralesModule {}
