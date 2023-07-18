import { Module } from '@nestjs/common';
import { RegistroController } from './minerales.controller';
import { RegistroService } from './minerales.service';
import { RegistroRepository } from './registro.repository';
@Module({
  controllers: [RegistroController],
  providers: [RegistroService, RegistroRepository],
})
export class MineralesModule {}
