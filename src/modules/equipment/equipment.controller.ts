import { Body, Controller, Post } from '@nestjs/common';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentCreateDto } from 'src/modules/equipment/dto/equipment.create.dto';
import { EquipmentService } from 'src/modules/equipment/equipment.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('/')
  async create(@Body() dto: EquipmentCreateDto): Promise<Equipment> {
    return this.equipmentService.create(dto);
  }
}
