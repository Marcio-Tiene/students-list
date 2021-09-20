import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';
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
    const students = await this.studentsRepository.save(createStudentInput);

    return students;
  }

  async findByAttributes(field?: StudentFields, searchTerm?: string) {
    if (!field || !searchTerm) {
      return await this.findAll();
    }
    const students = await this.studentsRepository.find({
      order: { name: 'ASC' },
      where: {
        [field]: Raw(() => `"${field}" ILIKE '%${searchTerm.toLowerCase()}%'`),
      },
    });

    return students;
  }

  async findAll() {
    return await this.studentsRepository.find({ order: { name: 'ASC' } });
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
