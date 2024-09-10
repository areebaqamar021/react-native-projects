import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from '../entities/profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async create(@Body() profileData: Partial<Profile>) {
    console.log("posted")
    return this.profileService.create(profileData);
  }

  @Get()
  async findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() profileData: Partial<Profile>,
  ): Promise<Profile> {
    return this.profileService.update(id, profileData);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.remove(id);
  }
}
