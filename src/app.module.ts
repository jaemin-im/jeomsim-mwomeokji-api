import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { NeedsModule } from './needs/needs.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.gql',
      introspection: process.env.STAGE === 'development',
      playground: process.env.STAGE === 'development',
    }),
    RestaurantModule,
    NeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
