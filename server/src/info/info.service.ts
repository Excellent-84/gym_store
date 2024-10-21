import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Info } from './info.entity';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class InfoService {

  constructor(
    @InjectRepository(Info) private readonly infoRepository: Repository<Info>,
                            private readonly itemService: ItemsService
  ) {}

  async createInfo(dto: CreateInfoDto): Promise<Info> {
    const item = await this.itemService.getItemById(dto.itemId);
    const info = this.infoRepository.create({...dto, item});
    await this.infoRepository.save(info);
    return info;
  }

  async getInfoAll(): Promise<Info[]> {
    const infoAll = await this.infoRepository.find({
      relations: { item: true }
    });
    return infoAll;
  }

  async getInfoById(id: number): Promise<Info> {
    const info = await this.infoRepository.findOneBy({ id });

    if (!info) {
      throw new NotFoundException('Информация о предмете не найдена')
    }

    return info;
  }

  async updateInfo(id: number, dto: UpdateInfoDto): Promise<Info> {
    const info = await this.getInfoById(id);
    Object.assign(info, dto);
    return await this.infoRepository.save(info);
  }

  async deleteInfo(id: number): Promise<void> {
    const info = await this.getInfoById(id);
    await this.infoRepository.remove(info);
  }
}
