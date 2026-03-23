import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

jest.mock('../prisma/prisma.service', () => {
  return {
    PrismaService: jest.fn().mockImplementation(() => ({
      user: {
        create: jest.fn(),
        findMany: jest.fn(),
      },
      $connect: jest.fn(),
    })),
  };
});

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
