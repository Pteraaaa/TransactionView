import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TransactionModule } from './transaction/transaction.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [TransactionModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
