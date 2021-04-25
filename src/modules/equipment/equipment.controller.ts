import { Body, Controller, Post, Get, Patch, Query, Delete } from '@nestjs/common';

import { Equipment } from 'src/modules/equipment/entities/equipment.entity';
import { EquipmentCreateDto } from 'src/modules/equipment/dto/equipment-create.dto';
import { EquipmentDeleteDto } from 'src/modules/equipment/dto/equipment-delete.dto';
import { EquipmentGetDto } from 'src/modules/equipment/dto/equipment-get.dto';
import { EquipmentLookup } from 'src/shared/types/equipment.type';
import { EquipmentLookupDto } from 'src/modules/equipment/dto/equipment-lookup.dto';
import { EquipmentService } from 'src/modules/equipment/equipment.service';
import { EquipmentUpdateDto } from 'src/modules/equipment/dto/equipment-update.dto';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get('/lookup')
  async lookup(@Query() dto: EquipmentLookupDto): Promise<EquipmentLookup> {
    return this.equipmentService.lookup(dto);
  }

  @Get('/')
  async get(@Query() dto: EquipmentGetDto): Promise<Equipment> {
    return this.equipmentService.get(dto);
  }

  @Post('/')
  async create(@Body() dto: EquipmentCreateDto): Promise<Equipment> {
    return this.equipmentService.create(dto);
  }

  @Patch('/')
  async update(@Body() dto: EquipmentUpdateDto): Promise<Equipment> {
    return this.equipmentService.update(dto);
  }

  @Delete('/')
  async delete(@Query() dto: EquipmentDeleteDto): Promise<void> {
    return this.equipmentService.delete(dto);
  }
}
