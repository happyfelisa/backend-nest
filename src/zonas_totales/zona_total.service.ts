import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { zona_total } from './zona_totales.entity/zona_total.controller';
export class Zona_totalService {
  constructor(
    @InjectRepository(zona_total)
    private zonaRepository: Repository<zona_total>,
  ) {}
  async getZonatotal(): Promise<zona_total[]> {
    return await this.zonaRepository.find();
  }
}
