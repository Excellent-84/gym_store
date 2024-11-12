import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Basket } from './baskets.entity';
import { Role } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { BasketItem } from 'src/basket_item/basket_item.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [BasketsService],
  controllers: [BasketsController],
  imports: [
    TypeOrmModule.forFeature([User, Basket, Role, BasketItem]),
    RolesModule,
    AuthModule
  ],
  exports: [BasketsService]
})
export class BasketsModule {}
