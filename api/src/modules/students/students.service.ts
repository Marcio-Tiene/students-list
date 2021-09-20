import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CpfValidatorService } from '../../utils/cpf-validator/cpf-validator.service';
import { Raw, Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { StudentFields } from '../../types/students';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    @Inject(CpfValidatorService) private cpfValidator: CpfValidatorService,
  ) {}
  async create(createStudentInput: CreateStudentInput) {
    if (!this.cpfValidator.isValidCPF(createStudentInput.cpf)) {
      throw new Error('cpf invalido');
    }
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
