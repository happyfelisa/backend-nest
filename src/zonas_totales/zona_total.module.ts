import { Module } from '@nestjs/common';
import { Zona_totalService } from './zona_total.service';
import { Zona_totalController } from './zona_totales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { zona_total } from './zona_totales.entity/zona_total.controller';
@Module({
  imports: [TypeOrmModule.forFeature([zona_total])],
  controllers: [Zona_totalController],
  providers: [Zona_totalService],
})
export class RecorridosModule {}
