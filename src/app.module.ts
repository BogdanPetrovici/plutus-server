import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

import Transaction from './transactions/transaction.model';
import Tag from './transactions/tag.model';
import TransactionTag from './transactions/transaction_tags.model';
import { TransactionsModule } from './transactions/transactions.module'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'ZENIT',
      port: 3306,
      username: 'sa',
      password: 'M3d4rdus!',
      database: 'plutus',
      dialectOptions: {
        options: {
          encrypt: false,
          instanceName: 'SQLEXPRESS2019'
        }
      },
      models: [Transaction, Tag, TransactionTag],
    }),
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
