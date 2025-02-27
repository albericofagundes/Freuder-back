import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async findAll(): Promise<Organization[]> {
    return this.organizationRepository.find();
  }

  async create(name: string, telefone?: string): Promise<Organization> {
    const organization = this.organizationRepository.create({
      name,
      telefone,
    });
    return this.organizationRepository.save(organization);
  }
}
