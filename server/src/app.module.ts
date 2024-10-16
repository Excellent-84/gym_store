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
import { ServeStaticModule } from "@nestjs/serve-static";
import { BallsModule } from './balls/balls.module';
import * as path from "path";
import { Ball } from "./balls/balls.entity";

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
      entities: [User, Role, Hoop, Ball],
      synchronize: true
    }),
    UsersModule,
    RolesModule,
    HoopsModule,
    FilesModule,
    BallsModule,
  ],
})
export class AppModule {}