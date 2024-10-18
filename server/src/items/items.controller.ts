import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
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
  async create(
    @Body() typeId: number, brandId: number, dto: CreateItemDto,
    @UploadedFile() image
  ) {
    return this.itemService.createItem(dto, typeId, brandId, image);
  }

  @ApiOperation({ summary: 'Получить все предметы' })
  @ApiResponse({ status: 200, type: [Item] })
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.getItems();
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
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateItemDto): Promise<Item> {
    return this.itemService.updateItem(id, dto);
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
