import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../../test/jest-mocks';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;
  let repositoryMock: MockType<Repository<Student>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentsService,
        {
          provide: getRepositoryToken(Student),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<StudentsService>(StudentsService);
    repositoryMock = module.get(getRepositoryToken(Student));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should find a studen', async () => {
    const user = {
      name: 'zé do brejo',
      id: 'xalalalalal',
      cpf: '2000000000',
      email: 'marcio@dobrejo.com',
    };

    repositoryMock.findOne.mockReturnValue(user);
    expect(await service.findOne(user.id)).toEqual(user);

    expect(repositoryMock.findOne).toHaveBeenCalledWith(user.id);
  });
});
