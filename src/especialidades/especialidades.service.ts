import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from './especialidad.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';

@Injectable()
export class EspecialidadesService {
  constructor(
    @InjectRepository(Especialidad)
    private especialidadesRepository: Repository<Especialidad>,
  ) {}

  findAll(): Promise<Especialidad[]> {
    return this.especialidadesRepository.find();
  }

  findOne(id: number): Promise<Especialidad> {
    return this.especialidadesRepository.findOneBy({ id });
  }

  create(createEspecialidadDto: CreateEspecialidadDto): Promise<Especialidad> {
    const especialidad = this.especialidadesRepository.create(createEspecialidadDto);
    return this.especialidadesRepository.save(especialidad);
  }

  async update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): Promise<Especialidad> {
    await this.especialidadesRepository.update(id, updateEspecialidadDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.especialidadesRepository.delete(id);
  }
}
