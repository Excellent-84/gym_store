import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { TypesService } from './types.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Type } from './types.entity';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('types')
export class TypesController {

   constructor(private readonly typeService: TypesService) {}

  @ApiOperation({ summary: 'Добавить тип предмета' })
  @ApiResponse({ status: 201, type: Type })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Post('/')
  async create(@Body() dto: CreateTypeDto) {
    return this.typeService.createType(dto);
  }

  @ApiOperation({ summary: 'Получить типы предметов' })
  @ApiResponse({ status: 200, type: [Type] })
  @Get()
  async findAll(): Promise<Type[]> {
    return this.typeService.getTypes();
  }

  @ApiOperation({ summary: 'Получить тип предмета по id' })
  @ApiResponse({ status: 200, type: Type })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Type> {
    return this.typeService.getTypeById(id);
  }

  @ApiOperation({ summary: 'Удалить тип предмета' })
  @HttpCode(204)
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.typeService.deleteType(id);
  }
}
