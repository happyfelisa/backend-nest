import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './mineral.entity/mineral.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private registroRepository: Repository<Registro>,
  ) {}

  async getVariablesPorFecha(fecha: Date): Promise<Registro> {
    return this.registroRepository.findOne({ where: { fecha } });
  }
}
