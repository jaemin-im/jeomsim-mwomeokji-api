import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantInput } from './dtos/create-restaurant.dto';
import { UpdateRestaurantInput } from './dtos/update-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schema/restaurant.schema';

@Resolver()
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Query(() => Restaurant, { nullable: true })
  async getRestaurantByName(@Args('input') name: string) {
    return this.restaurantService.searchRestaurantByName(name);
  }

  @Mutation(() => Restaurant)
  async createRestaurant(@Args('input') restaurant: CreateRestaurantInput) {
    return this.restaurantService.createRestaurant(restaurant);
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(@Args('input') restaurant: UpdateRestaurantInput) {
    return this.restaurantService.updateRestaurant(restaurant);
  }
}
