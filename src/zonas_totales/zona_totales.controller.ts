import { Controller, Get, Param } from '@nestjs/common';
import { Zona_totalService } from './zona_total.service';

@Controller('zona_total')
export class Zona_totalController {
  constructor(private readonly Total_zonaService: Zona_totalService) {}
  @Get('all')
  async getZonatotal() {
    return this.Total_zonaService.getZonatotal();
  }
}
