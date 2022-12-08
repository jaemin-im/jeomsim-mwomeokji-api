import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Needs {
  @Field(() => String)
  date: string;

  @Field(() => Number)
  kor: number;

  @Field(() => Number)
  chn: number;

  @Field(() => Number)
  jpn: number;

  @Field(() => Number)
  flour: number;
}
