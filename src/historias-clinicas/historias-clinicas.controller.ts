import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriasClinicasService } from './historias-clinicas.service';
import { CreateHistoriaClinicaDto } from './dto/create-historia-clinica.dto';
import { UpdateHistoriaClinicaDto } from './dto/update-historia-clinica.dto';

@Controller('historias-clinicas')
export class HistoriasClinicasController {
  constructor(private readonly historiasClinicasService: HistoriasClinicasService) {}

  @Post()
  create(@Body() createHistoriaClinicaDto: CreateHistoriaClinicaDto) {
    return this.historiasClinicasService.create(createHistoriaClinicaDto);
  }

  @Get()
  findAll() {
    return this.historiasClinicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historiasClinicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoriaClinicaDto: UpdateHistoriaClinicaDto) {
    return this.historiasClinicasService.update(+id, updateHistoriaClinicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historiasClinicasService.remove(+id);
  }
}
