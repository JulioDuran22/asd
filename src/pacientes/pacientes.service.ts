import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  findAll(): Promise<Paciente[]> {
    return this.pacientesRepository.find();
  }

  findOne(id: number): Promise<Paciente> {
    return this.pacientesRepository.findOneBy({ id });
  }

  create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacientesRepository.create(createPacienteDto);
    return this.pacientesRepository.save(paciente);
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    await this.pacientesRepository.update(id, updatePacienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pacientesRepository.delete(id);
  }
}
