import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Info } from './info.entity';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Injectable()
export class InfoService {

  constructor(
    @InjectRepository(Info) private readonly InfoRepository: Repository<Info>
  ) {}

  async createInfo(dto: CreateInfoDto): Promise<Info> {
    const info = this.InfoRepository.create(dto);
    await this.InfoRepository.save(info);
    return info;
  }

  async getInfoAll(): Promise<Info[]> {
    const infoAll = await this.InfoRepository.find();
    return infoAll;
  }

  async getInfoById(id: number): Promise<Info> {
    const info = await this.InfoRepository.findOneBy({ id });

    if (!info) {
      throw new NotFoundException('Информация о предмете не найдена')
    }

    return info;
  }

  async updateInfo(id: number, dto: UpdateInfoDto): Promise<Info> {
    const info = await this.getInfoById(id);
    Object.assign(info, dto);
    return await this.InfoRepository.save(info);
  }

  async deleteInfo(id: number): Promise<void> {
    const info = await this.getInfoById(id);
    await this.InfoRepository.remove(info);
  }
}
