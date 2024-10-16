import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HoopsService } from './hoops.service';
import { CreateHoopDto } from './dto/create-hoop.dto';
import { Hoop } from './hoops.entity';
import { UpdateHoopDto } from './dto/update-hoop.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Обручи')
@Controller('hoops')
export class HoopsController {

  constructor(private readonly hoopService: HoopsService) {}

  @ApiOperation({ summary: 'Добавить обруч' })
  @ApiResponse({ status: 201, type: Hoop })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post('/')
  async create(@Body() dto: CreateHoopDto, @UploadedFile() image) {
    return this.hoopService.createHoop(dto, image);
  }

  @ApiOperation({ summary: 'Получить все обручи' })
  @ApiResponse({ status: 200, type: [Hoop] })
  @Get()
  async findAll(): Promise<Hoop[]> {
    return this.hoopService.getHoops();
  }

  @ApiOperation({ summary: 'Получить обруч по id' })
  @ApiResponse({ status: 200, type: Hoop })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Hoop> {
    return this.hoopService.getHoopById(id);
  }

  @ApiOperation({ summary: 'Обновить обруч' })
  @ApiResponse({ status: 200, type: Hoop })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateHoopDto): Promise<Hoop> {
    return this.hoopService.updateHoop(id, dto);
  }

  @ApiOperation({ summary: 'Удалить обруч' })
  @HttpCode(204)
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.hoopService.deleteHoop(id);
  }
}
