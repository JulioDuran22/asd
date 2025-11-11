import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citasRepository: Repository<Cita>,
  ) {}

  findAll(): Promise<Cita[]> {
    return this.citasRepository.find({ relations: ['paciente', 'medico', 'especialidad'] });
  }

  findOne(id: number): Promise<Cita> {
    return this.citasRepository.findOne({ where: { id }, relations: ['paciente', 'medico', 'especialidad'] });
  }

  create(createCitaDto: CreateCitaDto): Promise<Cita> {
    const cita = this.citasRepository.create({
      ...createCitaDto,
      paciente: { id: createCitaDto.pacienteId },
      medico: { id: createCitaDto.medicoId },
      especialidad: { id: createCitaDto.especialidadId },
    });
    return this.citasRepository.save(cita);
  }

  async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
    await this.citasRepository.update(id, updateCitaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.citasRepository.delete(id);
  }
}
