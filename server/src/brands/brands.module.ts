import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { Item } from 'src/items/items.entity';
import { Brand } from './brands.entity';
import { Type } from 'src/types/types.entity';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
  imports: [
    TypeOrmModule.forFeature([Item, Brand, Type]),
    FilesModule
  ],
})
export class BrandsModule {}
