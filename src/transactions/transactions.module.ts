import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Transaction from './transaction.model';
import Tag from './tag.model';
import TransactionTags from './transaction_tags.model';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [SequelizeModule.forFeature([Transaction, Tag, TransactionTags])],
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}