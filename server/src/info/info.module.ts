import { forwardRef, Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Info } from './info.entity';
import { Item } from 'src/items/items.entity';
import { ItemsService } from 'src/items/items.service';
import { BrandsService } from 'src/brands/brands.service';
import { TypesService } from 'src/types/types.service';
import { FilesModule } from 'src/files/files.module';
import { Brand } from 'src/brands/brands.entity';
import { Type } from 'src/types/types.entity';
import { RolesModule } from 'src/roles/roles.module';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [InfoService, ItemsService, BrandsService, TypesService],
  controllers: [InfoController],
  imports: [
    TypeOrmModule.forFeature([User, Info, Item, Brand, Type]),
    AuthModule,
    RolesModule,
    FilesModule
  ]
})
export class InfoModule {}
