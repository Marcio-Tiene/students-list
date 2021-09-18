import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['../.env'], isGlobal: true }),
    GraphQLModule.forRoot({ autoSchemaFile: 'src/schema.gql' }),
    TypeOrmModule.forRoot({
      ...ormconfig,
      autoLoadEntities: true,
      migrationsTableName: 'migrations_typeorm',
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
