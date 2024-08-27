import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    PharmacyModule,
  ],
})
export class AppModule {}
