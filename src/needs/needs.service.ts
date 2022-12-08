import * as moment from 'moment';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateNeedsInput } from './dtos/update-needs.dto';

@Injectable()
export class NeedsService {
  constructor(private prisma: PrismaService) {}

  async getNeeds(date: string) {
    return await this.prisma.needs.findUnique({
      where: {
        date,
      },
    });
  }

  async upsertNeeds(input: UpdateNeedsInput) {
    try {
      const needs = await this.prisma.needs.findUniqueOrThrow({
        where: {
          date: input.date,
        },
      });
      const newNeedsValue = {};
      for (const need in needs) {
        if (need === 'date') continue;
        newNeedsValue[need] = input[need] + needs[need];
      }
      const result = await this.prisma.needs.update({
        where: {
          date: input.date,
        },
        data: {
          ...newNeedsValue,
        },
      });
      return result;
    } catch (err) {
      const result = await this.prisma.needs.create({
        data: {
          date: moment().format('YYYY-MM-DD'),
          ...input,
        },
      });
      return result;
    }
  }
}
