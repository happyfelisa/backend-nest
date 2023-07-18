import { Module } from '@nestjs/common';
import { RecorridosService } from './recorridos.service';
import { RecorridoController } from './recorridos.controller';

@Module({
  controllers: [RecorridoController],
  providers: [RecorridosService],
})
export class RecorridosModule {}
