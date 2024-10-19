import { Module } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { BasketsController } from './baskets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Basket } from './baskets.entity';
import { UsersModule } from 'src/users/users.module';
import { Role } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [BasketsService],
  controllers: [BasketsController],
  imports: [
    TypeOrmModule.forFeature([User, Basket, Role]),
    UsersModule,
    RolesModule
  ]
})
export class BasketsModule {}
