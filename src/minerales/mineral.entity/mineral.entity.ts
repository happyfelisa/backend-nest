import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class mineria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column({ length: 200 })
  extraccion_mineral_rajo_esperanza: string;

  @Column({ length: 200 })
  extraccion_lastre_rajo_esperanza: string;

  @Column({ length: 200 })
  Total_Extraccion_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Remanejo_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Movimiento_Total_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Mineral_a_Chancado_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Extraccion_Fase_8_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Extraccion_Lastre_Rajos_Tesoro: string;

  @Column({ length: 200 })
  Total_Extraccion_Rajos_Tesoro: string;

  @Column({ length: 200 })
  Remanejo_Rajos_Tesoro: string;

  @Column({ length: 200 })
  Movimiento_Total_Rajos_Tesoro: string;

  @Column({ length: 200 })
  Mineral_a_Chancado_Rajos_Tesoro: string;

  @Column({ length: 200 })
  TC_Remanejo_Rajos_Tesoro: string;

  @Column({ length: 200 })
  TC_Mov_Total_Rajos_Tesoro: string;

  @Column({ length: 200 })
  Extraccion_Mineral_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Extraccion_Marginal_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Extraccion_Lastre_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Total_Extraccion_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Remanejo_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Movimiento_Total_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Mineral_a_Chancado_Rajo_Encuentro: string;

  @Column({ length: 200 })
  Extraccion_Fase_7_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Extraccion_Mineral_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Extraccion_Oxido_y_Mixtos_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Extraccion_Lastre_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Total_Extraccion_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Remanejo_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Movimiento_Total_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Mineral_a_Chancado_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Extraccion_Fase_2_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Extraccion_Fase_3_Rajo_Esperanza_Sur: string;

  @Column({ length: 200 })
  Extraccion_OXE_Fase_4: string;

  @Column({ length: 200 })
  Extraccion_Fase_10_Rajo_Esperanza: string;

  @Column({ length: 200 })
  Extraccion_Lastre_Rajo_Llano: string;

  @Column({ length: 200 })
  Total_Extraccion_Rajo_Llano: string;

  @Column({ length: 200 })
  Movimiento_Total_Rajo_Llano: string;

  @Column({ length: 200 })
  Movimiento_Cttas_Rajo_Llano: string;

  @Column({ length: 200 })
  Extraccion_Fase_1_Rajo_Llano: string;

  @Column({ length: 200 })
  Extraccion_Fase_2_Rajo_Llano: string;
}
