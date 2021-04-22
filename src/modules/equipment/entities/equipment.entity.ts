import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';

@Table
export class Equipment extends Model<Equipment> {
  @PrimaryKey
  @ForeignKey(() => Clinic)
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING(254), allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.SMALLINT, allowNull: false })
  usageRatio: number;

  @Column({ type: DataType.DATE })
  receiptDate: Date;

  @BelongsTo(() => Clinic, 'id')
  clinic: Clinic;
}
