import { Controller, Get, Put, Delete, Param, Body, UseGuards, HttpCode, UsePipes, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './users.entity';
import { RoleGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { AddRoleDto } from './dto/add-role.dto';

@ApiTags('Пользователи')
@UseGuards(JwtAuthGuard)
// @UsePipes(ParseIntPipe)
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @ApiOperation({ summary: 'Получить пользователя по id' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({ summary: 'Обновить пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateUserDto): Promise<User> {
    return this.usersService.updateUser(id, dto);
  }

  @ApiOperation({ summary: 'Удалить пользователя' })
  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200})
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Post('/role')
  async addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }
}
