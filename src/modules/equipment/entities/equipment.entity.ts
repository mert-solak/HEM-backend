import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';

@Table
export class Equipment extends Model<Equipment> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING(254), allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  usageRatio: number;

  @Column({ type: DataType.DATE })
  receiptDate: Date;

  @ForeignKey(() => Clinic)
  clinicId: number;

  @BelongsTo(() => Clinic, 'clinicId')
  clinic: Clinic;
}
