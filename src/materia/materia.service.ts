import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMateriaDto) {
    return this.prisma.materia.create({ data });
  }

  findAll() {
    return this.prisma.materia.findMany({
      include: {
        carrera: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.materia.findUnique({
      where: { id_materia: id },
      include: {
        carrera: true,
      },
    });
  }

  update(id: number, data: UpdateMateriaDto) {
    return this.prisma.materia.update({
      where: { id_materia: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.materia.delete({
      where: { id_materia: id },
    });
  }
}
