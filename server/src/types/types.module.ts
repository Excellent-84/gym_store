import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/items/items.entity';
import { Brand } from 'src/brands/brands.entity';
import { Type } from './types.entity';
import { FilesModule } from 'src/files/files.module';
import { ItemsModule } from 'src/items/items.module';

@Module({
  providers: [TypesService],
  controllers: [TypesController],
  imports: [
    TypeOrmModule.forFeature([Item, Brand, Type]),
    FilesModule
  ],
  exports: [TypesService]
})
export class TypesModule {}
