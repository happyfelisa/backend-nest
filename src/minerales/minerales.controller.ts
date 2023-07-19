import { Controller, Get, Param } from '@nestjs/common';
import { MineralesService } from './minerales.service';
@Controller('mineria')
export class MineralesController {
  constructor(private readonly registroService: MineralesService) {}
  @Get('all')
  async getMineral() {
    return this.registroService.getMineral();
  }
}
