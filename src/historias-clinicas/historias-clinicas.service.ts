import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoriaClinica } from './historia-clinica.entity';
import { CreateHistoriaClinicaDto } from './dto/create-historia-clinica.dto';
import { UpdateHistoriaClinicaDto } from './dto/update-historia-clinica.dto';

@Injectable()
export class HistoriasClinicasService {
  constructor(
    @InjectRepository(HistoriaClinica)
    private historiasClinicasRepository: Repository<HistoriaClinica>,
  ) {}

  findAll(): Promise<HistoriaClinica[]> {
    return this.historiasClinicasRepository.find({ relations: ['paciente', 'medico'] });
  }

  findOne(id: number): Promise<HistoriaClinica> {
    return this.historiasClinicasRepository.findOne({ where: { id }, relations: ['paciente', 'medico'] });
  }

  create(createHistoriaClinicaDto: CreateHistoriaClinicaDto): Promise<HistoriaClinica> {
    const historiaClinica = this.historiasClinicasRepository.create({
      ...createHistoriaClinicaDto,
      paciente: { id: createHistoriaClinicaDto.pacienteId },
      medico: { id: createHistoriaClinicaDto.medicoId },
    });
    return this.historiasClinicasRepository.save(historiaClinica);
  }

  async update(id: number, updateHistoriaClinicaDto: UpdateHistoriaClinicaDto): Promise<HistoriaClinica> {
    await this.historiasClinicasRepository.update(id, updateHistoriaClinicaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.historiasClinicasRepository.delete(id);
  }
}
