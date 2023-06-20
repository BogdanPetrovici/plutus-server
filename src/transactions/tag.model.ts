import { AllowNull, Column, Model, PrimaryKey, Table, CreatedAt, UpdatedAt, BelongsToMany } from 'sequelize-typescript';
import TransactionTags from './transaction_tags.model';
import Transaction from './transaction.model';

@Table
export default class Tag extends Model {
    @PrimaryKey
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    userId: string;

    @CreatedAt
    createdAt: Date;
    
    @UpdatedAt
    updatedAt: Date;

    @BelongsToMany(() => Transaction, () => TransactionTags)
    transactions: Array<Transaction & {TransactionTags: TransactionTags}>
}