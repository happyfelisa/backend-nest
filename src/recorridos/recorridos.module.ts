import { Module } from '@nestjs/common';
import { RecorridosController } from './recorridos.controller';
import { RecorridosService } from './recorridos.service';

@Module({
  controllers: [RecorridosController],
  providers: [RecorridosService]
})
export class RecorridosModule {}
