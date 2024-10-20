import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Basket } from './baskets.entity';
import { CreateBasketDto } from './dto/create-basket.dto';

@Controller('baskets')
export class BasketsController {

  constructor(private readonly basketService: BasketsService) {}

  // @ApiOperation({ summary: 'Добавить корзину' })
  // @ApiResponse({ status: 201, type: Basket })
  // // @Roles('ADMIN')
  // // @UseGuards(RoleGuard)
  // @Post('/')
  // async create(@Body() dto: CreateBasketDto) {
  //   return this.basketService.createBasket(dto);
  // }

  @ApiOperation({ summary: 'Получить корзины' })
  @ApiResponse({ status: 200, type: [Basket] })
  @Get()
  async findAll(): Promise<Basket[]> {
    return this.basketService.getBaskets();
  }

  @ApiOperation({ summary: 'Получить корзину по id' })
  @ApiResponse({ status: 200, type: Basket })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Basket> {
    return this.basketService.getBasketById(id);
  }

  // @ApiOperation({ summary: 'Удалить корзину' })
  // @HttpCode(204)
  // // @Roles('ADMIN')
  // // @UseGuards(RoleGuard)
  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<void> {
  //   return this.basketService.deleteBasket(id);
  // }
}
