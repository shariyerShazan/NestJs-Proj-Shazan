import { Student } from './schema/student.schema';
import { StudentService } from './student.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
}
