import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './items.entity';
import { UpdateItemDto } from './dto/update-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Предметы')
@Controller('items')
export class ItemsController {

  constructor(private readonly itemService: ItemsService) {}

  @ApiOperation({ summary: 'Добавить предмет' })
  @ApiResponse({ status: 201, type: Item })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post('/')
  async create(@Body() dto: CreateItemDto, infoId: number, @UploadedFile() image) {
    return this.itemService.createItem(dto, infoId, image);
  }

  @ApiOperation({ summary: 'Получить все предметы' })
  @ApiResponse({ status: 200, type: [Item] })
  @Get()
  async findAll(
    @Query('typeId') typeId: number,
    @Query('brandId') brandId: number,
  ): Promise<Item[]> {
    return this.itemService.getItems(typeId, brandId);
  }

  @ApiOperation({ summary: 'Получить предмет по id' })
  @ApiResponse({ status: 200, type: Item })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item> {
    return this.itemService.getItemById(id);
  }

  @ApiOperation({ summary: 'Обновить предмет' })
  @ApiResponse({ status: 200, type: Item })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Put(':id')
  async update(
    @Param('id') id: number, @Body() dto: UpdateItemDto, @UploadedFile() image
  ): Promise<Item> {
    return this.itemService.updateItem(id, dto, image);
  }

  @ApiOperation({ summary: 'Удалить предмет' })
  @HttpCode(204)
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.itemService.deleteItem(id);
  }
}
