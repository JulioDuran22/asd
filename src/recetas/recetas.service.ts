import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetasRepository: Repository<Receta>,
  ) {}

  findAll(): Promise<Receta[]> {
    return this.recetasRepository.find({ relations: ['historiaClinica'] });
  }

  findOne(id: number): Promise<Receta> {
    return this.recetasRepository.findOne({ where: { id }, relations: ['historiaClinica'] });
  }

  create(createRecetaDto: CreateRecetaDto): Promise<Receta> {
    const receta = this.recetasRepository.create({
      ...createRecetaDto,
      historiaClinica: { id: createRecetaDto.historiaClinicaId },
    });
    return this.recetasRepository.save(receta);
  }

  async update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<Receta> {
    await this.recetasRepository.update(id, updateRecetaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.recetasRepository.delete(id);
  }
}
