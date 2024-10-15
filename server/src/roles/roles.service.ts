import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from './roles.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>
  ) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepository.create(dto);
    await this.roleRepository.save(role);
    return role;
  }

  async getRoleByValue(value: string): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ value });

    if (!role) {
      throw new NotFoundException('Роль не найдена')
    }

    return role;
  }
}
