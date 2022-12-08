import { IsNumber, IsString } from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  landAddress: string;

  @Field(() => String, { nullable: true })
  @IsString()
  roadAddress: string;

  @Field(() => String, { nullable: true })
  @IsString()
  type: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  lon: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  lat: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  dist: number;

  @Field(() => String, { nullable: true })
  @IsString()
  tags: string;

  @Field(() => String, { nullable: true })
  @IsString()
  beginTime: string;

  @Field(() => String, { nullable: true })
  @IsString()
  endTime: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  reviewRateAvg: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  reviewCount: number;

  @Field(() => String, { nullable: true })
  @IsString()
  thumbnailUrl: string;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  localRate: number;

  @Field(() => String, { nullable: true })
  @IsString()
  lastVisitAt: string;
}
