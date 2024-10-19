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
import { BasketsModule } from 'src/baskets/baskets.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Role, Item, Info, Basket]),
    forwardRef(() => AuthModule),
    RolesModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
