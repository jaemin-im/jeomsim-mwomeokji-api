import { IsNumber, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecommendRestaurantInput {
  @Field(() => String)
  @IsString()
  date: string;

  @Field(() => Number, { defaultValue: 0 })
  @IsNumber()
  startIndex: number;
}
