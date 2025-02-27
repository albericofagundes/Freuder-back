import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('fullName') fullName?: string,
    @Body('telefone') telefone?: string,
    @Body('isAdmin') isAdmin: boolean = false,
    @Body('discountRate') discountRate: number = 0.0,
    @Body('role') role: string = 'client', // Padrão é "client"
  ) {
    return this.usersService.create(
      username,
      email,
      password,
      fullName,
      telefone,
      isAdmin,
      discountRate,
      role,
    );
  }
}
