import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { total_zona } from './tota_zona_dia/total_zona.entity';
export class Total_zonaService {
  constructor(
    @InjectRepository(total_zona)
    private zonaRepository: Repository<total_zona>,
  ) {}
  async getZona(): Promise<total_zona[]> {
    return await this.zonaRepository.find();
  }
}
