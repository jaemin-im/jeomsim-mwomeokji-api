import { IsNumber, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateNeedsInput {
  @Field(() => String, { nullable: true })
  @IsString()
  date: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  kor: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  chn: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  jpn: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  west: number;
}
