import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateEstudianteDto) {
    return this.prisma.estudiante.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        cicloId: data.cicloId,     // <-- Debe ser el ID existente
        carreraId: data.carreraId, // <-- Debe ser el ID existente
      },
    });
  }

  findAll() {
    return this.prisma.estudiante.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
