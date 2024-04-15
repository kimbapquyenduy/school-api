import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacherDto: Prisma.TeacherCreateInput) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherDto: Prisma.TeacherUpdateInput,
  ) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(id);
  }
}
