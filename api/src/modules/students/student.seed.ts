import { Command } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';
import { StudentsService } from './students.service';
import { generateRandomStudentsDb } from '../../../test/generator';
import { CreateStudentInput } from './dto/create-student.input';

@Injectable()
export class StudentSeed {
  constructor(
    @Inject(StudentsService)
    private readonly studentsService: StudentsService,
  ) {}

  @Command({
    command: 'seed:students',
    describe: 'Seed 100 students to db',
  })
  async insertMany() {
    const randomUsersToSeed: CreateStudentInput[] = generateRandomStudentsDb(
      100,
    ).map(({ name, cpf, email }) => ({ name, email, cpf }));

    const seededUsers = await this.studentsService.createMany(
      randomUsersToSeed,
    );

    console.log(seededUsers);
  }
}
