import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeacherService {
  constructor(private dataService: DatabaseService) {}
  create(createTeacherDto: Prisma.TeacherCreateInput) {
    createTeacherDto.dateOfBirth = new Date(createTeacherDto.dateOfBirth);
    return this.dataService.teacher.create({ data: createTeacherDto });
  }

  findAll() {
    return this.dataService.teacher.findMany({});
  }

  findOne(id: string) {
    return this.dataService.teacher.findUnique({ where: { id } });
  }

  update(id: string, updateTeacherDto: Prisma.TeacherUpdateInput) {
    if (updateTeacherDto.dateOfBirth) {
      updateTeacherDto.dateOfBirth = new Date(
        updateTeacherDto.dateOfBirth.toString(),
      );
    }
    return this.dataService.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  remove(id: string) {
    return this.dataService.teacher.delete({ where: { id } });
  }
}
