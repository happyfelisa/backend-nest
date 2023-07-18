import { Controller, Get, Param } from '@nestjs/common';
import { RecorridosService } from './recorridos.service';

@Controller('recorridos')
export class RecorridoController {
  constructor(private readonly recorridoService: RecorridosService) {}

  @Get(':zona/:rajo/total-tonelaje')
  async getTotalTonelajePorZonaYRajo(
    @Param('zona') zona: string,
    @Param('rajo') rajo: string,
  ): Promise<number> {
    return this.recorridoService.getTotalTonelajePorZonaYRajo(zona, rajo);
  }
}
