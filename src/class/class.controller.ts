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
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  async create(@Body() createClassDto: Prisma.ClassCreateInput) {
    const results = await this.classService.create(createClassDto);
    return results;
  }

  @Get()
  async findAll() {
    const results = await this.classService.findAll();
    return results;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.classService.findOne(id);
    return result;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: Prisma.ClassUpdateInput,
  ) {
    const results = this.classService.update(id, updateClassDto);
    return results;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const results = this.classService.remove(id);
    return results;
  }
}
