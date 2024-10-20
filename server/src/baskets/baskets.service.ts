import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Basket } from './baskets.entity';
import { Repository } from 'typeorm';
import { CreateBasketDto } from './dto/create-basket.dto';

@Injectable()
export class BasketsService {

  constructor(
    @InjectRepository(Basket) private readonly basketRepository: Repository<Basket>
  ) {}

  async createBasket(dto: CreateBasketDto): Promise<Basket> {
    const basket = this.basketRepository.create(dto);
    await this.basketRepository.save(basket);
    return basket;
  }

  async getBaskets(): Promise<Basket[]> {
    const baskets = await this.basketRepository.find({
      relations: { user: true },
    });
    return baskets;
  }

  async getBasketById(id: number): Promise<Basket> {
    const basket = await this.basketRepository.findOne({
      where: {id},
      relations: ['user']
    });

    if (!basket) {
      throw new NotFoundException('Корзина не найдена')
    }

    return basket;
  }

  async deleteBasket(id: number): Promise<void> {
    const type = await this.getBasketById(id);
    await this.basketRepository.remove(type);
  }
}
