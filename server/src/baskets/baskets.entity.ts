import { ApiProperty } from "@nestjs/swagger";
import { BasketItem } from "src/basket_item/basket_item.entity";
import { User } from "src/users/users.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('baskets')
export class Basket {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, (user) => user.basket)
  @JoinColumn()
  user: User;

  @OneToMany(() => BasketItem, (basketItem) => basketItem.basket, { cascade: true })
  basketItems: BasketItem[];
}
