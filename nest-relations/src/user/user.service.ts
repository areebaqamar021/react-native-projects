import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ where: { id : id } });
  }

  async create(user: User) {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id : id } });
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
