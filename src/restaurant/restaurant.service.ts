import { Injectable } from '@nestjs/common';
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
