import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';

@Injectable()
export class EspecialidadService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateEspecialidadDto) {
    return this.prisma.especialidad.create({ data });
  }

  findAll() {
    return this.prisma.especialidad.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} especialidad`;
  }

  update(id: number, updateEspecialidadDto: UpdateEspecialidadDto) {
    return `This action updates a #${id} especialidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} especialidad`;
  }
}
