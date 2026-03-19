import { Injectable, OnModuleInit } from '@nestjs/common';
//import { PrismaClient } from '@prisma-clients/jobber-auth/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const connectionString = process.env.AUTH_DATABASE_URL;

        const adapter = new PrismaPg({
            connectionString,
        });

        super({
            adapter,
        });
    }

    async onModuleInit() {
       // const connectionString = process.env.AUTH_DATABASE_URL;
        //const adapter = new PrismaPg({ connectionString });
        
        await this.$connect();
    }
}
