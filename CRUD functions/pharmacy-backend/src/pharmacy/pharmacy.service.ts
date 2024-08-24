import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pharmacy } from './pharmacy.interface';

@Injectable()
export class PharmacyService {
  constructor(@InjectModel('Pharmacy') private readonly pharmacyModel: Model<Pharmacy>) {}

  async create(pharmacyDto: any): Promise<Pharmacy> {
    const createdPharmacy = new this.pharmacyModel(pharmacyDto);
    return await createdPharmacy.save();
  }

  async findAll(): Promise<Pharmacy[]> {
    return await this.pharmacyModel.find().exec();
  }

  async findOne(id: string): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyModel.findById(id).exec();
    if (!pharmacy) {
      throw new NotFoundException(`Pharmacy with ID ${id} not found`);
    }
    return pharmacy;
  }

  async update(id: string, pharmacyDto: any): Promise<Pharmacy> {
    const updatedPharmacy = await this.pharmacyModel.findByIdAndUpdate(id, pharmacyDto, { new: true }).exec();
    if (!updatedPharmacy) {
      throw new NotFoundException(`Pharmacy with ID ${id} not found`);
    }
    return updatedPharmacy;
  }

  async delete(id: string): Promise<void> {
    const result = await this.pharmacyModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Pharmacy with ID ${id} not found`);
    }
  }
}
