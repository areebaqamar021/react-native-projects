import { Schema } from 'mongoose';

export const PharmacySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfEstablishment: { type: Date, required: true }
});
