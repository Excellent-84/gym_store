import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { AuthModule } from '../auth/auth.module';
import { Role } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { Item } from 'src/items/items.entity';
import { Info } from 'src/info/info.entity';
import { Basket } from 'src/baskets/baskets.entity';
import { BasketsService } from 'src/baskets/baskets.service';
import { BasketsModule } from 'src/baskets/baskets.module';
import { BasketItem } from 'src/basket_item/basket_item.entity';
import { BasketItemService } from 'src/basket_item/basket_item.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BasketsService],
  imports: [
    TypeOrmModule.forFeature([User, Role, Item, Info, Basket]),
    forwardRef(() => AuthModule),
    // forwardRef(() => BasketsModule),
    RolesModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
