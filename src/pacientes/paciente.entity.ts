import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistoriaClinica } from '../historias-clinicas/historia-clinica.entity';
import { Cita } from '../citas/cita.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column()
  telefono: string;

  @OneToMany(() => HistoriaClinica, historia => historia.paciente)
  historiasClinicas: HistoriaClinica[];

  @OneToMany(() => Cita, cita => cita.paciente)
  citas: Cita[];
}
