import { Entity, Column } from 'typeorm';

@Entity()
export class zona_total {
  @Column()
  zona: string;

  @Column()
  rajo: string;

  @Column()
  total_tonelaje: string;
}
