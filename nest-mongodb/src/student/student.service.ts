import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schema/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    try {
      const newStudent = new this.studentModel(data);
      return newStudent.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async getAllStudents(): Promise<Student[]> {
    try {
      const students = this.studentModel.find().exec();
      return students;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error);
    }
  }

  async getStudentById(studentId: string ) : Promise<Student | null> {
    try {
      const student = this.studentModel.findById(studentId).exec()
      return student;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error);
    }
  }

  async updateStudent(studentId : string , data : Partial<Student>) : Promise<Student | null> {
    try {
      const student = this.studentModel.findByIdAndUpdate(studentId , data , {new : true}).exec()
      return student;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error);
    }
  }

  async deleteStudent(studentId : string): Promise<Student | null> {
    try {
      const deletedStudent = this.studentModel.findByIdAndDelete(studentId).exec()
      return deletedStudent;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error);
    }
  }
}
