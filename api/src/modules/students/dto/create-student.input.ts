import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  cpf: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
