import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Injectable()
export class CarreraService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCarreraDto) {
    return this.prisma.carrera.create({ data });
  }

  findAll() {
    return this.prisma.carrera.findMany({
      include: {
        especialidad: true,
        materias: true,
        ciclos: true,
        docentes: true,
        estudiantes: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.carrera.findUnique({
      where: { id_carrera: id },
      include: {
        especialidad: true,
        materias: true,
        ciclos: true,
        docentes: true,
        estudiantes: true,
      },
    });
  }

  update(id: number, data: UpdateCarreraDto) {
    return this.prisma.carrera.update({
      where: { id_carrera: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.carrera.delete({
      where: { id_carrera: id },
    });
  }
}
