import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateNeedsInput } from './dtos/update-needs.dto';
import { NeedsService } from './needs.service';
import { Needs } from './schema/needs.schema';

@Resolver()
export class NeedsResolver {
  constructor(private needsService: NeedsService) {}

  @Mutation(() => Needs)
  async upsertNeeds(@Args('input') needs: UpdateNeedsInput) {
    return await this.needsService.upsertNeeds(needs);
  }

  @Query(() => Needs, { nullable: true })
  async getNeeds(@Args('input') date: string) {
    return await this.needsService.getNeeds(date);
  }
}
