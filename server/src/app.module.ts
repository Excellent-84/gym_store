import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.entity";
import { UsersModule } from "./users/users.module";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.entity";
import { ItemsModule } from './items/items.module';
import { FilesModule } from './files/files.module';
import { Item } from "./items/items.entity";
import { ServeStaticModule } from "@nestjs/serve-static";
import { InfoModule } from './info/info.module';
import * as path from "path";
import { Info } from "./info/info.entity";
import { TypesModule } from './types/types.module';
import { BrandsModule } from './brands/brands.module';
import { Brand } from "./brands/brands.entity";
import { Type } from "./types/types.entity";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Role, Item, Info, Brand, Type],
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    ItemsModule,
    FilesModule,
    InfoModule,
    TypesModule,
    BrandsModule,
  ],
})
export class AppModule {}