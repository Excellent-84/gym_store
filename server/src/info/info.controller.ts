import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InfoService } from './info.service';
import { Info } from './info.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RoleGuard } from 'src/auth/roles.guard';

@ApiTags('Информация о предмете')
@Controller('info')
export class InfoController {

  constructor(private readonly infoService: InfoService) {}

  @ApiOperation({ summary: 'Добавить информацию' })
  @ApiResponse({ status: 201, type: Info })
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Post('/')
  async create(@Body() dto: CreateInfoDto) {
    return this.infoService.createInfo(dto);
  }

  @ApiOperation({ summary: 'Получить всю информацию о предмете' })
  @ApiResponse({ status: 200, type: [Info] })
  @Get()
  async findAll(): Promise<Info[]> {
    return this.infoService.getInfoAll();
  }

  @ApiOperation({ summary: 'Получить информацию о предмете по id' })
  @ApiResponse({ status: 200, type: Info })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Info> {
    return this.infoService.getInfoById(id);
  }

  @ApiOperation({ summary: 'Обновить информацию о предмете' })
  @ApiResponse({ status: 200, type: Info })
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateInfoDto): Promise<Info> {
    return this.infoService.updateInfo(id, dto);
  }

  @ApiOperation({ summary: 'Удалить информацию о предмете' })
  @HttpCode(204)
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.infoService.deleteInfo(id);
  }
}
