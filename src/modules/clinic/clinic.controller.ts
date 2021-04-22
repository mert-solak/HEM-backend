import { Body, Controller, Post } from '@nestjs/common';

import { Clinic } from 'src/modules/clinic/entities/clinic.entity';
import { ClinicCreateDto } from 'src/modules/clinic/dto/clinic-create.dto';
import { ClinicService } from 'src/modules/clinic/clinic.service';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post('/')
  async create(@Body() dto: ClinicCreateDto): Promise<Clinic> {
    return this.clinicService.create(dto);
  }
}
