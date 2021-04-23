import { Body, Controller, Get, Patch, Post, Query, Delete } from '@nestjs/common';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';
import { ClinicLookup } from 'src/shared/types/clinic.type';
import { ClinicLookupDto } from './dto/clinic-lookup.dto';
import { ClinicService } from 'src/modules/clinic/clinic.service';
import { ClinicUpdateDto } from './dto/clinic-update.dto';
import { ClinicDeleteDto } from './dto/clinic-delete.dto';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get('/')
  async lookup(@Query() dto: ClinicLookupDto): Promise<ClinicLookup> {
    return this.clinicService.lookup(dto);
  }

  @Post('/')
  async create(@Body() dto: ClinicCreateDto): Promise<Clinic> {
    return this.clinicService.create(dto);
  }

  @Patch('/')
  async update(@Body() dto: ClinicUpdateDto): Promise<Clinic> {
    return this.clinicService.update(dto);
  }

  @Delete('/')
  async delete(@Query() dto: ClinicDeleteDto): Promise<void> {
    return this.clinicService.delete(dto);
  }
}
