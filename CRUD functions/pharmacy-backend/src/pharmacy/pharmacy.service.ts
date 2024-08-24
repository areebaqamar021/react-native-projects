import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pharmacy, PharmacyDocument } from './pharmacy.schema';

@Injectable()
export class PharmacyService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Pharmacy.name) private pharmacyModel: Model<PharmacyDocument>,
  ) {}

  async create(createPharmacyDto: any): Promise<Pharmacy> {
    const createdPharmacy = new this.pharmacyModel(createPharmacyDto);
    return createdPharmacy.save();
  }

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyModel.find().exec();
  }

  async findOne(id: string): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyModel.findById(id).exec();
    if (!pharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return pharmacy;
  }

  async update(id: string, updatePharmacyDto: any): Promise<Pharmacy> {
    const updatedPharmacy = await this.pharmacyModel
      .findByIdAndUpdate(id, updatePharmacyDto, { new: true })
      .exec();
    if (!updatedPharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return updatedPharmacy;
  }

  async remove(id: string): Promise<any> {
    const deletedPharmacy = await this.pharmacyModel.findOneAndDelete({ _id: id }).exec();
    if (!deletedPharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return deletedPharmacy;
  }
}
