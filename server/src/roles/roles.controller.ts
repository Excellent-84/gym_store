import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {

  constructor(private readonly roleService: RolesService) {}

  @ApiOperation({ summary: 'Добавление роли' })
  @ApiResponse({ status: 201, type: Role })
  @Post('/')
  async create(@Body() roleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Получение роли по value' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':value')
  async getByValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRoleByValue(value);
  }
}
