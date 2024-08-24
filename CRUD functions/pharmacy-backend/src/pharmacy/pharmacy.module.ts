import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { Pharmacy, PharmacySchema } from './pharmacy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pharmacy.name, schema: PharmacySchema }]),
  ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
