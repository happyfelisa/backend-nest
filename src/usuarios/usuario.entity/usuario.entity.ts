import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  tipo: string;

  @Column()
  password: string;
}
