import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recorrido {
  @PrimaryGeneratedColumn()
  id_recorrido: number;

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
