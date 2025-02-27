import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(
    username: string,
    email: string,
    password: string,
    fullName?: string,
    telefone?: string,
    isAdmin: boolean = false,
    discountRate: number = 0.0,
    role: string = 'client',
  ): Promise<User> {
    const user = this.userRepository.create({
      username,
      email,
      password,
      fullName,
      telefone,
      isAdmin,
      discountRate,
      role,
    });
    return this.userRepository.save(user);
  }
}
