import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BrandsService } from './brands.service';
import { Brand } from './brands.entity';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {

   constructor(private readonly brandService: BrandsService) {}

  @ApiOperation({ summary: 'Добавить бренд' })
  @ApiResponse({ status: 201, type: Brand })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Post('/')
  async create(@Body() dto: CreateBrandDto) {
    return this.brandService.createBrand(dto);
  }

  @ApiOperation({ summary: 'Получить все бренды' })
  @ApiResponse({ status: 200, type: [Brand] })
  @Get()
  async findAll(): Promise<Brand[]> {
    return this.brandService.getBrands();
  }

  @ApiOperation({ summary: 'Получить бренд по id' })
  @ApiResponse({ status: 200, type: Brand })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Brand> {
    return this.brandService.getBrandById(id);
  }

  @ApiOperation({ summary: 'Удалить бренд' })
  @HttpCode(204)
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.brandService.deleteBrand(id);
  }
}
