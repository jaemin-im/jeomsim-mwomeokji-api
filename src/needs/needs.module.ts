import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NeedsResolver } from './needs.resolver';
import { NeedsService } from './needs.service';

@Module({
  providers: [NeedsResolver, NeedsService, PrismaService],
})
export class NeedsModule {}
