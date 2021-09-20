import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { CommandModule } from 'nestjs-command';
import { StudentSeed } from './student.seed';
import { CpfValidatorService } from 'src/utils/cpf-validator/cpf-validator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), CommandModule],
  providers: [
    StudentsResolver,
    StudentsService,
    StudentSeed,
    CpfValidatorService,
  ],
  exports: [TypeOrmModule],
})
export class StudentsModule {}
