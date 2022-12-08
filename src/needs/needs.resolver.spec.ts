import { Test, TestingModule } from '@nestjs/testing';
import { NeedsResolver } from './needs.resolver';

describe('NeedsResolver', () => {
  let resolver: NeedsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedsResolver],
    }).compile();

    resolver = module.get<NeedsResolver>(NeedsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
