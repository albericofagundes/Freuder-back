import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  async findAll() {
    return this.organizationsService.findAll();
  }

  @Post()
  create(@Body('name') name: string, @Body('telefone') telefone?: string) {
    return this.organizationsService.create(name, telefone);

    return `Organização ${name} criada`;
  }
}
