import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.entity";
import { UsersModule } from "./users/users.module";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";
import { HoopsModule } from './hoops/hoops.module';
import { FilesModule } from './files/files.module';
import { Hoop } from "./hoops/hoops.entity";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Role, Hoop],
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    HoopsModule,
    FilesModule,
  ],
})
export class AppModule {}