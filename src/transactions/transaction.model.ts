import { AllowNull, Column, Model, PrimaryKey, Table, CreatedAt, UpdatedAt, BelongsToMany } from 'sequelize-typescript';
import TransactionTags from './transaction_tags.model';
import Tag from './tag.model';

@Table
export default class Transaction extends Model {
    @PrimaryKey
    @Column
    id: number;
    
    @AllowNull(false)
    @Column
    amount: number;
    
    @AllowNull(false)
    @Column
    date: Date;

    @AllowNull(false)
    @Column
    payee: string;

    @AllowNull(false)
    @Column
    note: string;

    @AllowNull(false)
    @Column
    userId: string;
    
    @CreatedAt
    createdAt: Date;
    
    @UpdatedAt
    updatedAt: Date;

    @BelongsToMany(() => Tag, () => TransactionTags)
    tags: Array<Tag & {TransactionTags: TransactionTags}>;
}