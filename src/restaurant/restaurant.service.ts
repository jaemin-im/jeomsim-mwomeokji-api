import { Injectable } from '@nestjs/common';
import { Needs } from 'src/needs/schema/needs.schema';
import { PrismaService } from 'src/prisma.service';
import { CreateRestaurantInput } from './dtos/create-restaurant.dto';
import { UpdateRestaurantInput } from './dtos/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async createRestaurant(input: CreateRestaurantInput) {
    return this.prisma.restaurant.create({
      data: input,
    });
  }

  async recommendRestaurants(date: string) {
    const finalNeeds = this.prisma.needs.findUnique({
      where: {
        date,
      },
    });

    const allRestaurants = this.prisma.restaurant.findMany({});

    return allRestaurants;
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
