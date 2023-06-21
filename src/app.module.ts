import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

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
      autoLoadModels: true,
      synchronize: true,
    }),
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
