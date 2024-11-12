import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { FilesModule } from 'src/files/files.module';
import { Item } from './items.entity';
import { User } from 'src/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from 'src/brands/brands.entity';
import { Type } from 'src/types/types.entity';
import { TypesService } from 'src/types/types.service';
import { BrandsService } from 'src/brands/brands.service';
import { BasketItem } from 'src/basket_item/basket_item.entity';
import { Info } from 'src/info/info.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [ItemsService, TypesService, BrandsService],
  controllers: [ItemsController],
  imports: [
    TypeOrmModule.forFeature([User, Item, Brand, Type, BasketItem, Info]),
    FilesModule,
    AuthModule
  ],
  exports: [ItemsService]
})
export class ItemsModule {}
