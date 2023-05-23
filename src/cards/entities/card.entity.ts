import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'cards' })
export class Card extends Model<Card> {
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
  word: string;

  @Column({
    type: DataType.STRING,
  })
  transcription: string;

  @Column({
    type: DataType.STRING,
  })
  translation: string;

  @Column({
    type: DataType.STRING,
  })
  type: string;
}
