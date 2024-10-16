import { Module } from '@nestjs/common';
import { BallsService } from './balls.service';
import { BallsController } from './balls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { User } from 'src/users/users.entity';
import { Ball } from './balls.entity';

@Module({
  providers: [BallsService],
  controllers: [BallsController],
  imports: [
    TypeOrmModule.forFeature([User, Ball]),
    FilesModule
  ]
})
export class BallsModule {}
