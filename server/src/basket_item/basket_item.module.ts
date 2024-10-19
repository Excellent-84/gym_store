import { Module } from '@nestjs/common';
import { BasketItemService } from './basket_item.service';
import { BasketItemController } from './basket_item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/items/items.entity';
import { BasketItem } from './basket_item.entity';

@Module({
  providers: [BasketItemService],
  controllers: [BasketItemController],
  imports: [
    TypeOrmModule.forFeature([Item, BasketItem])
  ]
})
export class BasketItemModule {}
