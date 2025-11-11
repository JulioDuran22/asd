import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { HistoriaClinica } from '../historias-clinicas/historia-clinica.entity';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HistoriaClinica, historiaClinica => historiaClinica.recetas)
  historiaClinica: HistoriaClinica;

  @Column()
  medicamentos: string;
}
