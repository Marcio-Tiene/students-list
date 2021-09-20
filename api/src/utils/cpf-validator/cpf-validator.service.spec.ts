import { Test, TestingModule } from '@nestjs/testing';
import { CpfValidatorService } from './cpf-validator.service';

describe('CpfValidatorService', () => {
  let service: CpfValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpfValidatorService],
    }).compile();

    service = module.get<CpfValidatorService>(CpfValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
