import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from './medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private medicosRepository: Repository<Medico>,
  ) {}

  findAll(): Promise<Medico[]> {
    return this.medicosRepository.find({ relations: ['especialidad'] });
  }

  findOne(id: number): Promise<Medico> {
    return this.medicosRepository.findOne({ where: { id }, relations: ['especialidad'] });
  }

  create(createMedicoDto: CreateMedicoDto): Promise<Medico> {
    const medico = this.medicosRepository.create({
      ...createMedicoDto,
      especialidad: { id: createMedicoDto.especialidadId },
    });
    return this.medicosRepository.save(medico);
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<Medico> {
    await this.medicosRepository.update(id, updateMedicoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.medicosRepository.delete(id);
  }
}
