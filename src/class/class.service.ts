import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassService {
  constructor(private dataService: DatabaseService) {}
  create(createClassDto: Prisma.ClassCreateInput) {
    createClassDto.startAt = new Date(createClassDto.startAt);
    createClassDto.endAt = new Date(createClassDto.endAt);
    return this.dataService.class.create({ data: createClassDto });
  }

  async findAll() {
    return this.dataService.class.findMany({});
  }

  async findOne(id: string) {
    return this.dataService.class.findUnique({
      where: { id },
      include: {
        teacher: true,
        students: true,
      },
    });
  }

  async update(id: string, updateClassDto: Prisma.ClassUpdateInput) {
    updateClassDto.startAt = new Date(updateClassDto.startAt.toString());
    updateClassDto.endAt = new Date(updateClassDto.endAt.toString());
    return this.dataService.class.update({
      where: { id },
      data: updateClassDto,
    });
  }

  async remove(id: string) {
    return this.dataService.class.delete({ where: { id } });
  }
}
