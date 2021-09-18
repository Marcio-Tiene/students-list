import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => Student, { name: 'createStudent' })
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentsService.create(createStudentInput);
  }

  @Mutation(() => [Student], { name: 'createManyStudents' })
  async createManyStudents(
    @Args('createStudentsInput', { type: () => [CreateStudentInput] })
    createStudentsInput: CreateStudentInput[],
  ) {
    return this.studentsService.createMany(createStudentsInput);
  }

  @Query(() => [Student], { name: 'students' })
  findAll() {
    return this.studentsService.findAll();
  }

  @Query(() => Student, { name: 'getStudentById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.studentsService.findOne(id);
  }

  @Mutation(() => Student, { name: 'updateStudent' })
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentsService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation(() => Student)
  removeStudent(@Args('id', { type: () => String }) id: string) {
    return this.studentsService.remove(id);
  }
}
