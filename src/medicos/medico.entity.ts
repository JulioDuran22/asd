import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Especialidad } from '../especialidades/especialidad.entity';
import { HistoriaClinica } from '../historias-clinicas/historia-clinica.entity';
import { Cita } from '../citas/cita.entity';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Especialidad, especialidad => especialidad.medicos)
  especialidad: Especialidad;

  @OneToMany(() => HistoriaClinica, historia => historia.medico)
  historiasClinicas: HistoriaClinica[];

  @OneToMany(() => Cita, cita => cita.medico)
  citas: Cita[];
}
