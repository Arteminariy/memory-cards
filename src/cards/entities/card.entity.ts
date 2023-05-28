import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from 'src/types/entities/type.entity';

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

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
  })
  typeId: number;

  @BelongsTo(() => Type)
  type: Type;
}
