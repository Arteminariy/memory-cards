import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Card } from 'src/cards/entities/card.entity';

@Table({ tableName: 'types' })
export class Type extends Model<Type> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasMany(() => Card)
  cards: Card[];
}
