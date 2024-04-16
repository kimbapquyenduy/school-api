import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassService {
  constructor(private dataService: DatabaseService) {}
  create(createClassDto: Prisma.ClassCreateInput) {
    return this.dataService.class.create({ data: createClassDto });
  }

  findAll() {
    return this.dataService.class.findMany({});
  }

  findOne(id: string) {
    return this.dataService.class.findUnique({
      where: { id },
      include: {
        teacher: true,
        students: true,
      },
    });
  }

  update(id: string, updateClassDto: Prisma.ClassUpdateInput) {
    return this.dataService.class.update({
      where: { id },
      data: updateClassDto,
    });
  }

  remove(id: string) {
    return this.dataService.class.delete({ where: { id } });
  }
}
