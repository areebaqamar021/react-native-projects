import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  async create(@Body() pharmacyDto: any) {
    return await this.pharmacyService.create(pharmacyDto);
  }

  @Get()
  async findAll() {
    return await this.pharmacyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pharmacyService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() pharmacyDto: any) {
    return await this.pharmacyService.update(id, pharmacyDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.pharmacyService.delete(id);
  }
}
