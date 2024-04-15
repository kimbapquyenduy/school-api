import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { TeacherModule } from './teacher/teacher.module';
@Module({
  imports: [DatabaseModule, StudentModule, ClassModule, TeacherModule]
})
export class AppModule {}
