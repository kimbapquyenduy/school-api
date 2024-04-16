import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Prisma } from '@prisma/client';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: Prisma.StudentCreateInput) {
    const results = await this.studentService.create(createStudentDto);
    return results;
  }

  @Get()
  async findAll() {
    const results = await this.studentService.findAll();
    return results;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.studentService.findOne(id);
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: Prisma.StudentUpdateInput,
  ) {
    const results = await this.studentService.update(id, updateStudentDto);
    return results;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const results = await this.studentService.remove(id);
    return results;
  }
}
