import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recorrido } from './recorrido.entity/recorrido.entity';
@Injectable()
export class RecorridosService {
  constructor(
    @InjectRepository(Recorrido)
    private recorridoRepository: Repository<Recorrido>,
  ) {}

  async getTotalTonelajePorZonaYRajo(
    zona: string,
    rajo: string,
  ): Promise<number> {
    const result = await this.recorridoRepository
      .createQueryBuilder('recorrido')
      .select(
        'SUM(CAST(recorrido.tonelaje AS DECIMAL(10,2)))',
        'total_tonelaje',
      )
      .where('recorrido.zona = :zona', { zona })
      .andWhere('recorrido.rajo = :rajo', { rajo })
      .getRawOne();

    return parseFloat(result.total_tonelaje) || 0;
  }
}
