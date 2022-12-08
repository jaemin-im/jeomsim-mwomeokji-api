import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  landAddress: string;

  @Field(() => String, { nullable: true })
  roadAddress: string;

  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => Number, { nullable: true })
  lon: number;

  @Field(() => Number, { nullable: true })
  lat: number;

  @Field(() => Number, { nullable: true })
  dist: number;

  @Field(() => String, { nullable: true })
  tags: string;

  @Field(() => String, { nullable: true })
  beginTime: string;

  @Field(() => String, { nullable: true })
  endTime: string;

  @Field(() => Number, { nullable: true })
  reviewRateAvg: number;

  @Field(() => Number, { nullable: true })
  reviewCount: number;

  @Field(() => String, { nullable: true })
  thumbnailUrl: string;

  @Field(() => Number, { nullable: true })
  localRate: number;

  @Field(() => String, { nullable: true })
  lastVisitAt: string;
}
