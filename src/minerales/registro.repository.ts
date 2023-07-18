import { EntityRepository, Repository } from 'typeorm';
import { Registro } from './mineral.entity/mineral.entity';

@EntityRepository(Registro)
export class RegistroRepository extends Repository<Registro> {}
