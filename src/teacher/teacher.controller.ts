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
  async create(@Body() createTeacherDto: Prisma.TeacherCreateInput) {
    const results = await this.teacherService.create(createTeacherDto);
    return results;
  }

  @Get()
  async findAll() {
    const results = await this.teacherService.findAll();
    return results;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.teacherService.findOne(id);
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: Prisma.TeacherUpdateInput,
  ) {
    const results = await this.teacherService.update(id, updateTeacherDto);
    return results;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const results = await this.teacherService.remove(id);
    return results;
  }
}
