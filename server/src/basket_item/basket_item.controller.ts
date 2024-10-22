import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { BasketItemService } from './basket_item.service';
import { BasketItem } from './basket_item.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateBasketItemDto } from './dto/create-basket_item.dto';

@Controller('basket-item')
export class BasketItemController {

  constructor(private readonly basketItemService: BasketItemService) {}

  @ApiOperation({ summary: 'Добавить тип предмета' })
  @ApiResponse({ status: 201, type: BasketItem })
  @Post('/')
  async create(@Body() dto: CreateBasketItemDto) {
    return this.basketItemService.createBasketItem(dto);
  }

  @ApiOperation({ summary: 'Получить типы предметов' })
  @ApiResponse({ status: 200, type: [BasketItem] })
  @Get()
  async findAll(@Query('basketId') basketId: number): Promise<BasketItem[]> {
    return this.basketItemService.getBasketItemAll(basketId);
  }

  @ApiOperation({ summary: 'Получить тип предмета по id' })
  @ApiResponse({ status: 200, type: BasketItem })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BasketItem> {
    return this.basketItemService.getBasketItemById(id);
  }

  @ApiOperation({ summary: 'Удалить тип предмета' })
  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.basketItemService.deleteBasketItem(id);
  }
}
