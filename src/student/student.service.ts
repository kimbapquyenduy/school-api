import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private dataService: DatabaseService) {}
  async create(createStudentDto: Prisma.StudentCreateInput) {
    createStudentDto.dateOfBirth = new Date(createStudentDto.dateOfBirth);
    return this.dataService.student.create({ data: createStudentDto });
  }

  async findAll() {
    return this.dataService.student.findMany({});
  }

  async findOne(id: string) {
    return this.dataService.student.findUnique({
      where: { id },
      include: {
        class: true,
      },
    });
  }

  async update(id: string, updateStudentDto: Prisma.StudentUpdateInput) {
    updateStudentDto.dateOfBirth = new Date(
      updateStudentDto.dateOfBirth.toString(),
    );
    return this.dataService.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: string) {
    return this.dataService.student.delete({ where: { id } });
  }
}
