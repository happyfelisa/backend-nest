import { Controller, Get, Param } from '@nestjs/common';
import { RecorridosService } from './recorridos.service';

@Controller('recorridos')
export class RecorridoController {
  constructor(private readonly recorridoService: RecorridosService) {}
  @Get('all')
  async getRecorridos() {
    return this.recorridoService.getRecorridos();
  }
}
