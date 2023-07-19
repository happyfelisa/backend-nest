import { Module } from '@nestjs/common';
import { Total_zonaService } from './total_zona_dia.service';
import { total_zona } from './tota_zona_dia/total_zona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Total_ZonaController } from './total_zona_dia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([total_zona])],
  controllers: [Total_ZonaController],
  providers: [Total_zonaService],
})
export class RecorridosModule {}
