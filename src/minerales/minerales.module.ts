import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MineralesController } from './minerales.controller';
import { MineralesService } from './minerales.service';
import { mineria } from './mineral.entity/mineral.entity';

@Module({
  imports: [TypeOrmModule.forFeature([mineria])],
  controllers: [MineralesController],
  providers: [MineralesService],
})
export class MineralesModule {}
