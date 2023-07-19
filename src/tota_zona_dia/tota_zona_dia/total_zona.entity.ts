import { Entity, Column } from 'typeorm';

@Entity()
export class total_zona {
  @Column()
  fecha: Date;

  @Column()
  rajo: string;

  @Column()
  zona: string;

  @Column()
  total_tonelaje: string;
}
