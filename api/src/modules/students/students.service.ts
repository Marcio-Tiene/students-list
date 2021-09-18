import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}
  async create(createStudentInput: CreateStudentInput) {
    const student = await this.studentsRepository.save(createStudentInput);

    return student;
  }

  async createMany(createStudentInput: CreateStudentInput[]) {
    const student = await this.studentsRepository.save(createStudentInput);

    return student;
  }

  async findAll() {
    return await this.studentsRepository.find();
  }

  async findOne(id: string) {
    const student = await this.studentsRepository.findOne(id);
    return student;
  }

  async update(id: string, updateStudentInput: UpdateStudentInput) {
    const student = await this.studentsRepository.update(
      id,
      updateStudentInput,
    );
    return student;
  }

  async remove(id: string) {
    const removeResult = await this.studentsRepository.delete(id);
    return removeResult;
  }
}
