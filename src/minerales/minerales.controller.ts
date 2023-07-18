import { Controller, Get, Param } from '@nestjs/common';
import { RegistroService } from './minerales.service';
import { Registro } from './mineral.entity/mineral.entity';

@Controller('registros')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Get(':fecha')
  async getVariablesPorFecha(@Param('fecha') fecha: string): Promise<Registro> {
    return this.registroService.getVariablesPorFecha(new Date(fecha));
  }
}
