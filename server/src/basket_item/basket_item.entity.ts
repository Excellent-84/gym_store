import { ApiProperty } from "@nestjs/swagger";
import { Basket } from "src/baskets/baskets.entity";
import { Item } from "src/items/items.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('basket_item')
export class BasketItem {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Item, (item) => item.basketItem)
  @JoinColumn()
  item: Item;

  @ManyToOne(() => Basket, (basket) => basket.basketItems, { onDelete: 'CASCADE'})
  basket: Basket;
}
