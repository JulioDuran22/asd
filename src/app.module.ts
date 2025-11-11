import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { MedicosModule } from './medicos/medicos.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { HistoriasClinicasModule } from './historias-clinicas/historias-clinicas.module';
import { RecetasModule } from './recetas/recetas.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_nest',
      password: '0000',
      database: 'nestdb',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EspecialidadesModule,
    MedicosModule,
    PacientesModule,
    HistoriasClinicasModule,
    RecetasModule,
    CitasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
