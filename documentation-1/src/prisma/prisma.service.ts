import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';



export interface OnModuleDestroyT {
  onModuleDestroy(signal?: string): any;
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
      await this.$connect();
      console.log("prisma connected")
  }
  async onModuleDestroy(signal?: string){
     await this.$disconnect();
    console.log("Prisma disconnected");
  }
}

// 