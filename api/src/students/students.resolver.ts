import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver('Student')
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation('createStudent')
  create(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentsService.create(createStudentInput);
  }

  @Query('students')
  findAll() {
    return this.studentsService.findAll();
  }

  @Query('student')
  findOne(@Args('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Mutation('updateStudent')
  update(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.studentsService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation('removeStudent')
  remove(@Args('id') id: number) {
    return this.studentsService.remove(id);
  }
}
