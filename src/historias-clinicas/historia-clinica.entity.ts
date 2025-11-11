import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Paciente } from '../pacientes/paciente.entity';
import { Medico } from '../medicos/medico.entity';
import { Receta } from '../recetas/receta.entity';

@Entity()
export class HistoriaClinica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paciente, paciente => paciente.historiasClinicas)
  paciente: Paciente;

  @ManyToOne(() => Medico, medico => medico.historiasClinicas)
  medico: Medico;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  descripcion: string;

  @OneToMany(() => Receta, receta => receta.historiaClinica)
  recetas: Receta[];
}
