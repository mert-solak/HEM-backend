import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';
import { ClinicLookup } from 'src/shared/types/clinic.type';
import { ClinicLookupDto } from './dto/clinic-lookup.dto';
import { ClinicService } from 'src/modules/clinic/clinic.service';

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
}
