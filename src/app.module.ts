import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarreraModule } from './carrera/carrera.module';
import { MateriaModule } from './materia/materia.module';
import { CicloModule } from './ciclo/ciclo.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { DocenteModule } from './docente/docente.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CarreraModule, MateriaModule, CicloModule, EstudianteModule, DocenteModule, EspecialidadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
