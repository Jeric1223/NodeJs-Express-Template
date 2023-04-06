import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  Comment,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';

@Table({ tableName: 'tb_temp' })
class Temp extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Comment('인덱스')
  @Column({
    type: DataType.INTEGER
  })
  id!: number;
}

export default Temp;
