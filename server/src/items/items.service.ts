import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './items.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FilesService } from 'src/files/files.service';
import { TypesService } from 'src/types/types.service';
import { BrandsService } from 'src/brands/brands.service';
import { InfoService } from 'src/info/info.service';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
                            private readonly typeService: TypesService,
                            private readonly brandService: BrandsService,
                            private readonly fileService: FilesService,
                            // private readonly infoService: InfoService
  ) {}

  async createItem(dto: CreateItemDto, image: any): Promise<Item> {
    const fileName = await this.fileService.createFile(image);
    const type = await this.typeService.getTypeById(dto.typeId);
    const brand = await this.brandService.getBrandById(dto.brandId);
    // const info = await this.infoService.getInfoById(infoId);
    const item = this.itemRepository.create({ ...dto, type, brand, image: fileName });
    // info.item = item;
    await this.itemRepository.save(item);
    return item;
  }

  async getItems(typeId?: number, brandId?: number): Promise<Item[]> {

    if (typeId && !brandId) {
      await this.typeService.getTypeById(typeId);
    }

    if (!typeId && brandId) {
      await this.brandService.getBrandById(brandId);
    }

    if (typeId && brandId) {
      await this.typeService.getTypeById(typeId);
      await this.brandService.getBrandById(brandId);
    }

    const items = await this.itemRepository.find({
      relations: {
        type: true,
        brand: true,
        info: true
      },
      where: {
        ...(typeId ? { type: { id: typeId } } : {}),
        ...(brandId ? { brand: { id: brandId } } : {}),
      }
    });

    return items;
  }

  async getItemById(id: number): Promise<Item> {
    const item = await this.itemRepository.findOne({
      where: {id},
      relations: ['type', 'brand', 'info']
    });

    if (!item) {
      throw new NotFoundException('Предмет не найден')
    }

    return item;
  }

  async updateItem(id: number, dto: UpdateItemDto, image?: any): Promise<Item> {
    const item = await this.getItemById(id);
    Object.assign(item, dto);

    if (dto.typeId) {
      item.type = await this.typeService.getTypeById(dto.typeId);
    }

    if (dto.brandId) {
      item.brand = await this.brandService.getBrandById(dto.brandId);
    }

    if (image) {
      item.image = await this.fileService.createFile(image);
    }

    return this.itemRepository.save(item);
  }

  async deleteItem(id: number): Promise<void> {
    const item = await this.getItemById(id);
    await this.itemRepository.remove(item);
  }
}
