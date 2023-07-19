import { Module } from '@nestjs/common';
import { RecorridosService } from './recorridos.service';
import { RecorridoController } from './recorridos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { recorrido } from './recorrido.entity/recorrido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([recorrido])],
  controllers: [RecorridoController],
  providers: [RecorridosService],
})
export class RecorridosModule {}
