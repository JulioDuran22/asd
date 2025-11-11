import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Paciente } from '../pacientes/paciente.entity';
import { Medico } from '../medicos/medico.entity';
import { Especialidad } from '../especialidades/especialidad.entity';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paciente, paciente => paciente.citas)
  paciente: Paciente;

  @ManyToOne(() => Medico, medico => medico.citas)
  medico: Medico;

  @ManyToOne(() => Especialidad, especialidad => especialidad.citas)
  especialidad: Especialidad;

  @Column({ type: 'date' })
  fecha: Date;
}
