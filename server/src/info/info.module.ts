import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Info } from './info.entity';
import { Item } from 'src/items/items.entity';

@Module({
  providers: [InfoService],
  controllers: [InfoController],
  imports: [
    TypeOrmModule.forFeature([User, Info, Item])
  ]
})
export class InfoModule {}
