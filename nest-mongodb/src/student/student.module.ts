import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentScehma } from './schema/student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentScehma }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
