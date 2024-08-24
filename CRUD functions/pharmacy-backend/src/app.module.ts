import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    MongooseModule.forRoot('YOUR_MONGODB_ATLAS_CONNECTION_STRING'),
    PharmacyModule,
  ],
})
export class AppModule {}
