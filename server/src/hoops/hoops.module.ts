import { Module } from '@nestjs/common';
import { HoopsService } from './hoops.service';
import { HoopsController } from './hoops.controller';
import { FilesModule } from 'src/files/files.module';
import { Hoop } from './hoops.entity';
import { User } from 'src/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [HoopsService],
  controllers: [HoopsController],
  imports: [
    TypeOrmModule.forFeature([User, Hoop]),
    FilesModule
  ]
})
export class HoopsModule {}
