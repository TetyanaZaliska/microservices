import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

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

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
