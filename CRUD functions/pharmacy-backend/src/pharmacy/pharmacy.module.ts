import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { PharmacySchema } from './pharmacy.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pharmacy', schema: PharmacySchema }])],
  providers: [PharmacyService],
  controllers: [PharmacyController],
})
export class PharmacyModule {}
