import { Body, Controller, Get, Patch, Post, Query, Delete } from '@nestjs/common';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';
import { ClinicDeleteDto } from 'src/modules/clinic/dto/clinic-delete.dto';
import { ClinicGetDto } from 'src/modules/clinic/dto/clinic-get.dto';
import { ClinicLookup } from 'src/shared/types/clinic.type';
import { ClinicLookupDto } from 'src/modules/clinic/dto/clinic-lookup.dto';
import { ClinicService } from 'src/modules/clinic/clinic.service';
import { ClinicUpdateDto } from 'src/modules/clinic/dto/clinic-update.dto';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get('/lookup')
  async lookup(@Query() dto: ClinicLookupDto): Promise<ClinicLookup> {
    return this.clinicService.lookup(dto);
  }

  @Get('/')
  async get(@Query() dto: ClinicGetDto): Promise<Clinic> {
    return this.clinicService.get(dto);
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
