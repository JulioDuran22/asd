import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medico } from '../medicos/medico.entity';
import { Cita } from '../citas/cita.entity';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Medico, medico => medico.especialidad)
  medicos: Medico[];

  @OneToMany(() => Cita, cita => cita.especialidad)
  citas: Cita[];
}
