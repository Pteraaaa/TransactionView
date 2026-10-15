import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service.js';
import { TransactionController } from './transaction.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
