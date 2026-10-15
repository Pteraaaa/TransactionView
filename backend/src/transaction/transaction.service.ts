/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto.js';
import { UpdateTransactionDto } from './dto/update-transaction.dto.js';
import transactions from './transaction.json' with {type: 'json'};
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TransactionService {
  transactionData = transactions.data;
  constructor(private readonly prismaService: PrismaService){}

  async create(createTransactionDto: CreateTransactionDto) {
    console.log(createTransactionDto)
    return await this.prismaService.transaction.create({
      data: createTransactionDto
    }); 
  }

  async findAll() {
    return await this.prismaService.transaction.findMany();
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return await this.prismaService.transaction.update({
      where: {id},
      data: updateTransactionDto
    });
  }

  remove(id: number) {
    return this.prismaService.transaction.delete({
      where: {id}
    });
  }

  async seed(){
    for(const item of this.transactionData){
      await this.prismaService.transaction.create({
        data:{
          id: item.id,
          productID: item.productID,
          productName: item.productName,
          amount: Number(item.amount),
          customerName: item.customerName,
          status: Number(item.status),
          transactionDate: new Date(item.transactionDate),
          createBy: item.createBy,
          createOn: new Date(item.createOn),
        }
      })
    }
  }

  async deleteAll(){
    return await this.prismaService.transaction.deleteMany()
  }
}
