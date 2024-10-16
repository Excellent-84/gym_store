import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { AuthModule } from '../auth/auth.module';
import { Role } from 'src/roles/roles.entity';
import { RolesModule } from 'src/roles/roles.module';
import { Hoop } from 'src/hoops/hoops.entity';
import { Ball } from 'src/balls/balls.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Role, Hoop, Ball]),
    forwardRef(() => AuthModule),
    RolesModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
