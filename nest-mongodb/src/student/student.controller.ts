import { Student } from './schema/student.schema';
import { StudentService } from './student.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Get()
  async getAllStudents(){
    return this.studentService.getAllStudents();
  }

  @Get('/:studentId')
  async getStudentById(@Param('studentId') studentId : string){
    return this.studentService.getStudentById(studentId);
  }

  @Patch('/:studentId')
  async updateStudent(@Param('studentId') studentId : string , @Body() data : Partial<Student>){
    return this.studentService.updateStudent(studentId , data);
  }

  @Delete('/:studentId')
  async deleteStudent(@Param('studentId') studentId : string){
    return this.studentService.deleteStudent(studentId);
  }
}
