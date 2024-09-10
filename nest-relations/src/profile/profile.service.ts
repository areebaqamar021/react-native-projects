import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(profileData: Partial<Profile>): Promise<Profile> {
    const profile = this.profileRepository.create(profileData);
    return this.profileRepository.save(profile);
  }

  async findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async findOne(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({where : {id: id}});
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  async update(id: number, profileData: Partial<Profile>): Promise<Profile> {
    const profile = await this.profileRepository.preload({
      id,
      ...profileData,
    });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<void> {
    const result = await this.profileRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
  }
}
