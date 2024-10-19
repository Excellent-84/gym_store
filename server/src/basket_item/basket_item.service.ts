import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BasketItem } from './basket_item.entity';
import { CreateBasketItemDto } from './dto/create-basket_item.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BasketItemService {

  constructor(
    @InjectRepository(BasketItem) private readonly basketItemRepository: Repository<BasketItem>,
                              // private readonly userService: UsersService
  ) {}

  async createBasketItem(dto: CreateBasketItemDto): Promise<BasketItem> {
    // const user = await this.userService.getUserById(dto.userId);
    const basket = this.basketItemRepository.create({ ...dto});
    // await this.basketRepository.save(basket);
    return basket;
  }

  async getBasketItemAll(): Promise<BasketItem[]> {
    const items = await this.basketItemRepository.find({
      // relations: { user: true },
    });
    return items;
  }

  async getBasketItemById(id: number): Promise<BasketItem> {
    const item = await this.basketItemRepository.findOne({
      where: {id},
      // relations: ['user']
    });

    if (!item) {
      throw new NotFoundException('Предмет в корзине не найден')
    }

    return item;
  }

  async deleteBasketItem(id: number): Promise<void> {
    const item = await this.getBasketItemById(id);
    await this.basketItemRepository.remove(item);
  }
}