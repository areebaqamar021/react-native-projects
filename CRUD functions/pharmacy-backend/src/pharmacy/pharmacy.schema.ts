import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PharmacyDocument = Pharmacy & Document;

@Schema()
export class Pharmacy {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true, unique: true, match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })
  email: string;

  @Prop({ required: true })
  dateOfEstablishment: Date;
}

export const PharmacySchema = SchemaFactory.createForClass(Pharmacy);
