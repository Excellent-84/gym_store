import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './types.entity';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable()
export class TypesService {

  constructor(
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>
  ) {}

  async createType(dto: CreateTypeDto): Promise<Type> {
    const type = this.typeRepository.create(dto);
    await this.typeRepository.save(type);
    return type;
  }

  async getTypes(): Promise<Type[]> {
    const types = await this.typeRepository.find();
    return types;
  }

  async getTypeById(id: number): Promise<Type> {
    const type = await this.typeRepository.findOneBy({ id });

    if (!type) {
      throw new NotFoundException('Тип не найден')
    }

    return type;
  }

  async deleteType(id: number): Promise<void> {
    const type = await this.getTypeById(id);
    await this.typeRepository.remove(type);
  }
}
