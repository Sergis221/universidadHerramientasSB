import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';

@Injectable()
export class CicloService {
  constructor(private prisma: PrismaService) {}

  create(createCicloDto: CreateCicloDto) {
    return this.prisma.ciclo.create({
      data: {
        nombre: createCicloDto.nombre,
        numero: createCicloDto.numero,
        carreraId: createCicloDto.carreraId, // <-- Usa el nombre correcto y un ID válido
      },
    });
  }

  findAll() {
    return this.prisma.ciclo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} ciclo`;
  }

  update(id: number, updateCicloDto: UpdateCicloDto) {
    return `This action updates a #${id} ciclo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciclo`;
  }
}
