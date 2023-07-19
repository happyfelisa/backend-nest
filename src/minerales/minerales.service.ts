import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { mineria } from './mineral.entity/mineral.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MineralesService {
  constructor(
    @InjectRepository(mineria)
    private mineriaRepository: Repository<mineria>,
  ) {}

  async getMineral(): Promise<mineria[]> {
    return await this.mineriaRepository.find();
  }
}
