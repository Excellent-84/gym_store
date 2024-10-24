import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { Item } from 'src/items/items.entity';
import { Brand } from './brands.entity';
import { Type } from 'src/types/types.entity';
import { ItemsModule } from 'src/items/items.module';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
  imports: [
    TypeOrmModule.forFeature([Item, Brand, Type]),
    FilesModule
  ],
  // exports: [BrandsService]
})
export class BrandsModule {}
