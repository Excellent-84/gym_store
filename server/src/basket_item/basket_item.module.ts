import { Module } from '@nestjs/common';
import { BasketItemService } from './basket_item.service';
import { BasketItemController } from './basket_item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/items/items.entity';
import { BasketItem } from './basket_item.entity';
import { ItemsService } from 'src/items/items.service';
import { Basket } from 'src/baskets/baskets.entity';
import { TypesService } from 'src/types/types.service';
import { BrandsService } from 'src/brands/brands.service';
import { FilesModule } from 'src/files/files.module';
import { Type } from 'src/types/types.entity';
import { Brand } from 'src/brands/brands.entity';
import { BasketsService } from 'src/baskets/baskets.service';

@Module({
  providers: [BasketItemService, ItemsService, TypesService, BrandsService, BasketsService],
  controllers: [BasketItemController],
  imports: [
    TypeOrmModule.forFeature([Item, BasketItem, Basket, Type, Brand]),
    FilesModule,

  ],
  exports: [BasketItemService]
})
export class BasketItemModule {}
