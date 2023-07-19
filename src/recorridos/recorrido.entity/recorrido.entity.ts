import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Init } from 'v8';

@Entity()
export class recorrido {
  @PrimaryGeneratedColumn()
  id_recorrido: Init;

  @Column()
  fecha: Date;

  @Column()
  carguio: string;

  @Column()
  camion: string;

  @Column()
  flota: string;

  @Column()
  material: string;

  @Column()
  origen: string;

  @Column()
  zona: string;

  @Column()
  destino: string;

  @Column()
  tonelaje: string;

  @Column()
  ciclos: number;

  @Column()
  rajo: string;
}
