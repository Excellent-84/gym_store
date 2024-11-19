import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BasketItem } from './basket_item.entity';
import { CreateBasketItemDto } from './dto/create-basket_item.dto';
import { Repository } from 'typeorm';
import { ItemsService } from 'src/items/items.service';
import { BasketsService } from 'src/baskets/baskets.service';

@Injectable()
export class BasketItemService {

  constructor(
    @InjectRepository(BasketItem) private readonly basketItemRepository: Repository<BasketItem>,
                                  private readonly basketService: BasketsService,
                                  private readonly itemService: ItemsService
  ) {}

  async createBasketItem(dto: CreateBasketItemDto): Promise<BasketItem> {
    const item = await this.itemService.getItemById(dto.itemId);
    const basket = await this.basketService.getBasketById(dto.basketId)
    const basketItem = this.basketItemRepository.create({ ...dto, item});
    basketItem.basket = basket
    await this.basketItemRepository.save(basketItem);
    return basketItem;
  }

  async getBasketItemAll(basketId: number): Promise<BasketItem[]> {
    const basket = await this.basketService.getBasketById(basketId)
    const items = await this.basketItemRepository.find({
      relations: { item: true, basket: true },
      where: {basket: {id: basketId}}
    });
    return items;
  }

  async getBasketItemById(id: number): Promise<BasketItem> {
    const item = await this.basketItemRepository.findOne({
      where: {id},
      relations: ['basket', 'item']
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
