import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { Pharmacy } from './pharmacy.interface';

@Injectable()
export class PharmacyService {
  constructor(@InjectModel('Pharmacy') private readonly pharmacyModel: Model<Pharmacy>) {}

  async create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    const createdPharmacy = new this.pharmacyModel(createPharmacyDto);
    return createdPharmacy.save();
  }

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyModel.find().exec();
  }

  async findOne(id: string): Promise<Pharmacy> {
    return this.pharmacyModel.findById(id).exec();
  }

  async update(id: string, updatePharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyModel.findByIdAndUpdate(id, updatePharmacyDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.pharmacyModel.findByIdAndRemove(id).exec();
  }
}
