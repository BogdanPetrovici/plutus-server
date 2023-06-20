import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import Transaction from './transaction.model';

@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) {}

    @Get()
    async findAll(): Promise<Transaction[]> {
        return this.transactionsService.findAll();
    }
}