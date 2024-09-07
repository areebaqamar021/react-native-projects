import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { Pharmacy, PharmacySchema } from './pharmacy.schema';

@Module({
  imports: [],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
