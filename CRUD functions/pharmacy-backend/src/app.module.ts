import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://areebaqamar:649tQoAoSKDeDror@cluster0.mongodb.net/pharmacyDB?retryWrites=true&w=majority'),
    PharmacyModule,
  ],
})
export class AppModule {}
