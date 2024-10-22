import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Роли пользователей')
@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolesController {

  constructor(private readonly roleService: RolesService) {}

  // @ApiOperation({ summary: 'Добавление роли' })
  // @Post('/')
  // async create(@Body() roleDto: CreateRoleDto): Promise<Role> {
  //   return this.roleService.createRole(roleDto);
  // }@ApiResponse({ status: 201, type: Role })

  @ApiOperation({ summary: 'Получение роли по value' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':value')
  async getByValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRoleByValue(value);
  }
}
