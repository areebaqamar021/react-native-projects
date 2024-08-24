import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  async create(@Body() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmacyService.create(createPharmacyDto);
  }

  @Get()
  async findAll() {
    return this.pharmacyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pharmacyService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePharmacyDto: CreatePharmacyDto) {
    return this.pharmacyService.update(id, updatePharmacyDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.pharmacyService.delete(id);
  }
}
