import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../../test/jest-mocks';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentsResolver } from './students.resolver';
import { StudentsService } from './students.service';

describe('StudentsResolver', () => {
  let resolver: StudentsResolver;
  let repositoryMock: MockType<Repository<Student>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentsResolver,
        StudentsService,
        {
          provide: getRepositoryToken(Student),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    resolver = module.get<StudentsResolver>(StudentsResolver);
    repositoryMock = module.get(getRepositoryToken(Student));
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
