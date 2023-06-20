import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Transaction from './transaction.model';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }

  findOne(id: string): Promise<Transaction> {
    return this.transactionModel.findOne({
      where: {
        id,
      },
    });
  }
}