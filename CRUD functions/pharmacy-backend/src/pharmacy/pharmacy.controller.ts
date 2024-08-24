import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  create(@Body() createPharmacyDto: any) {
    return this.pharmacyService.create(createPharmacyDto);
  }

  @Get()
  findAll() {
    return this.pharmacyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmacyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePharmacyDto: any) {
    return this.pharmacyService.update(id, updatePharmacyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmacyService.remove(id);
  }
}
