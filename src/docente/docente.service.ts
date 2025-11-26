import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';  
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';

@Injectable()
export class DocenteService {
  constructor (private prisma: PrismaService) {}

  create(createDocenteDto: CreateDocenteDto) {
    return this.prisma.docente.create({data: createDocenteDto,
    });
  }

  findAll() {
    return this.prisma.docente.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} docente`;
  }

  update(id: number, updateDocenteDto: UpdateDocenteDto) {
    return `This action updates a #${id} docente`;
  }

  remove(id: number) {
    return `This action removes a #${id} docente`;
  }
}
