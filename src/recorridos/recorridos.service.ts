import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { recorrido } from './recorrido.entity/recorrido.entity';
@Injectable()
export class RecorridosService {
  constructor(
    @InjectRepository(recorrido)
    private recorridoRepository: Repository<recorrido>,
  ) {}
  async getRecorridos(): Promise<recorrido[]> {
    return await this.recorridoRepository.find();
  }
}
