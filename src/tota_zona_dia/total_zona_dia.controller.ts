import { Controller, Get, Param } from '@nestjs/common';
import { Total_zonaService } from './total_zona_dia.service';

@Controller('recorridos')
export class RecorridoController {
  constructor(private readonly Total_zonaService: Total_zonaService) {}
  @Get('all')
  async getZona() {
    return this.Total_zonaService.getZona();
  }
}
