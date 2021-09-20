import { Module, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { ConfigModule } from '@nestjs/config';

import { StudentsModule } from './modules/students/students.module';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['../.env'], isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      plugins: [responseCachePlugin()],
    }),
    TypeOrmModule.forRoot({
      ...ormconfig,
      autoLoadEntities: true,
      migrationsTableName: 'migrations_typeorm',
    }),

    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
