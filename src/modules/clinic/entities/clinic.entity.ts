import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, HasMany } from 'sequelize-typescript';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';

@Table
export class Clinic extends Model<Clinic> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING(254), allowNull: false })
  name: string;

  @HasMany(() => Equipment, { onDelete: 'CASCADE', hooks: true, foreignKey: 'id' })
  equipments: Equipment[];
}
