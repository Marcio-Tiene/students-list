import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Mutation(() => Student, { name: 'createStudent' })
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentsService.create(createStudentInput);
  }

  @Mutation(() => [Student])
  async createManyStudents(
    @Args('createStudentsInput', { type: () => [CreateStudentInput] })
    createStudentsInput: CreateStudentInput[],
  ) {
    return this.studentsService.createMany(createStudentsInput);
  }

  @Mutation(() => Student)
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

  @Query(() => [Student], { name: 'students' })
  searchStudentsFromAttribute(
    @Args('field', {
      type: () => String,
      nullable: true,
      description: 'cpf or name or email',
    })
    field?: StudentFields,
    @Args('searchTerms', { type: () => String, nullable: true })
    searchTerms?: string,
    @Info() info?: GraphQLResolveInfo,
  ) {
    info.cacheControl.setCacheHint({ maxAge: 120 });
    return this.studentsService.findByAttributes(field, searchTerms);
  }
}
