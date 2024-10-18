import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brands.entity';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {

  constructor(
    @InjectRepository(Brand) private readonly brandRepository: Repository<Brand>
  ) {}

  async createBrand(dto: CreateBrandDto): Promise<Brand> {
    const brand = this.brandRepository.create(dto);
    await this.brandRepository.save(brand);
    return brand;
  }

  async getBrands(): Promise<Brand[]> {
    const brands = await this.brandRepository.find();
    return brands;
  }

  async getBrandById(id: number): Promise<Brand> {
    const brand = await this.brandRepository.findOneBy({ id });

    if (!brand) {
      throw new NotFoundException('Бренд не найден')
    }

    return brand;
  }

  async deleteBrand(id: number): Promise<void> {
    const brand = await this.getBrandById(id);
    await this.brandRepository.remove(brand);
  }
}
