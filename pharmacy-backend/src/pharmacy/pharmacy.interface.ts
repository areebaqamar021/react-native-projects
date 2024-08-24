import { Document } from 'mongoose';

export interface Pharmacy extends Document {
  id?: string; 
  name: string;
  address: string;
  city: string;
  email: string;
  dateOfEstablishment: Date;
}
