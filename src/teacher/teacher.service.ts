import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeacherService {
  constructor(private dataService: DatabaseService) {}
  async create(createTeacherDto: Prisma.TeacherCreateInput) {
    createTeacherDto.dateOfBirth = new Date(createTeacherDto.dateOfBirth);
    return this.dataService.teacher.create({ data: createTeacherDto });
  }

  async findAll() {
    return this.dataService.teacher.findMany({});
  }

  async findOne(id: string) {
    return this.dataService.teacher.findUnique({ where: { id } });
  }

  async update(id: string, updateTeacherDto: Prisma.TeacherUpdateInput) {
    updateTeacherDto.dateOfBirth = new Date(
      updateTeacherDto.dateOfBirth.toString(),
    );
    return this.dataService.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  async remove(id: string) {
    return this.dataService.teacher.delete({ where: { id } });
  }
}
