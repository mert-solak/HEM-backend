import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentController } from 'src/modules/equipment/equipment.controller';
import { EquipmentService } from 'src/modules/equipment/equipment.service';

@Module({
  imports: [SequelizeModule.forFeature([Equipment])],
  providers: [EquipmentService],
  controllers: [EquipmentController],
  exports: [EquipmentService],
})
export class EquipmentModule {}
