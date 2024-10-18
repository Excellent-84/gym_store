import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './items.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FilesService } from 'src/files/files.service';
import { TypesService } from 'src/types/types.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class ItemsService {

  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
                            private readonly typeService: TypesService,
                            private readonly brandService: BrandsService,
                            private readonly fileService: FilesService
  ) {}

  async createItem(dto: CreateItemDto, typeId: number, brandId: number, image: any): Promise<Item> {
    await this.typeService.getTypeById(typeId);
    await this.brandService.getBrandById(brandId);
    const fileName = await this.fileService.createFile(image);
    const item = this.itemRepository.create({
      ...dto, type: {id: typeId}, brand: {id: brandId}, image: fileName
    });

    console.log(item);
    await this.itemRepository.save(item);
    return item;
  }

  async getItems(): Promise<Item[]> {
    const items = await this.itemRepository.find({
    relations: {
      type: true,
      brand: true,
    },
});
    return items;
  }

  async getItemById(id: number): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException('Предмет не найден')
    }

    return item;
  }

  async updateItem(id: number, dto: UpdateItemDto): Promise<Item> {
    const item = await this.getItemById(id);
    Object.assign(item, dto);
    return await this.itemRepository.save(item);
  }

  async deleteItem(id: number): Promise<void> {
    const item = await this.getItemById(id);
    await this.itemRepository.remove(item);
  }
}
