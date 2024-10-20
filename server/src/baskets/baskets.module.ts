import { forwardRef, Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Basket } from './baskets.entity';
import { UsersModule } from 'src/users/users.module';
import { Role } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { UsersService } from 'src/users/users.service';
import { Type } from 'src/types/types.entity';
import { BasketItem } from 'src/basket_item/basket_item.entity';

@Module({
  providers: [BasketsService],
  controllers: [BasketsController],
  imports: [
    TypeOrmModule.forFeature([User, Basket, Role, BasketItem]),
    RolesModule,
    // forwardRef(() => UsersModule)
  ],
  exports: [BasketsService]
})
export class BasketsModule {}
