import { AllowNull, Column, Model, PrimaryKey, ForeignKey, Table, CreatedAt, UpdatedAt, BelongsToMany } from 'sequelize-typescript';
import Transaction from './transaction.model';
import Tag from './tag.model';

@Table({ tableName: 'Transaction_Tags', modelName: 'TransactionTags'})
export default class TransactionTags extends Model {
  @ForeignKey(() => Transaction)
  @Column
  transactionId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}