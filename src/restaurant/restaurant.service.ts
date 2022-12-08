import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRestaurantInput } from './dtos/create-restaurant.dto';
import { RecommendRestaurantInput } from './dtos/recommend-restaurant.dto';
import { UpdateRestaurantInput } from './dtos/update-restaurant.dto';
import _ from 'underscore';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async createRestaurant(input: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: input,
    });
  }

  async recommendRestaurants(input: RecommendRestaurantInput) {
    const finalNeeds = await this.prisma.needs.findUnique({
      where: {
        date: input.date,
      },
    });
    console.log(finalNeeds);
    const finalNeedTotal =
      finalNeeds.kor + finalNeeds.chn + finalNeeds.jpn + finalNeeds.flour;

    const allRestaurants = await this.prisma.restaurant.findMany({});
    const allCategories = await this.prisma.category.findMany({});

    const removedTags = [
      '신규맛집',
      '1인분주문',
      'SNS맛집',
      '카페디저트',
      '테이크아웃',
      '프랜차이즈',
      '야식',
      '예약픽업',
    ];
    const restaurantScore = [];

    for (const restaurant of allRestaurants) {
      if (restaurant.tags !== null) {
        let score = 0;
        let replacedTags = JSON.parse(restaurant.tags.replaceAll("'", '"'));
        for (const tag of replacedTags) {
          if (_.contains(removedTags, tag)) {
            replacedTags = replacedTags.filter(
              (tag) => !_.contains(removedTags, tag),
            );
          }
          if (allCategories.some((c) => c.category == tag)) {
            const scoredCat = allCategories.find((c) => c.category === tag);
            score +=
              (finalNeeds.kor / finalNeedTotal) * scoredCat.kor +
              (finalNeeds.chn / finalNeedTotal) * scoredCat.chn +
              (finalNeeds.jpn / finalNeedTotal) * scoredCat.jpn +
              (finalNeeds.flour / finalNeedTotal) * scoredCat.flour;
          }
        }
        score = Number(
          (
            score / replacedTags.length -
            (5 - restaurant.reviewRateAvg) * 0.05
          ).toFixed(4),
        );
        console.log(restaurant.name, replacedTags, score);
        restaurantScore.push({
          ...restaurant,
          score,
        });
      }
    }

    const sortedScore = restaurantScore.sort((a, b) =>
      a.score > b.score ? -1 : 1,
    );

    return sortedScore.slice(input.startIndex, input.startIndex + 5);
  }

  async searchRestaurantByName(name: string) {
    return this.prisma.restaurant.findFirst({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async searchRestaurantById(id: number) {
    return this.prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
  }

  async updateRestaurant(input: UpdateRestaurantInput) {
    return this.prisma.restaurant.update({
      where: {
        id: input.id,
      },
      data: input,
    });
  }
}
