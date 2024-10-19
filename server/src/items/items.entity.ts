import { ApiProperty } from '@nestjs/swagger';
import { BasketItem } from 'src/basket_item/basket_item.entity';
import { Brand } from 'src/brands/brands.entity';
import { Info } from 'src/info/info.entity';
import { Type } from 'src/types/types.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';

@Entity('items')
export class Item {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Hoop', description: 'Наименование товара'})
  @Column('varchar', { unique: true, length: 20 })
  title!: string;

  @ApiProperty({ example: 'Image', description: 'Изображение' })
  @Column('varchar', { length: 50 })
  image: string;

  @ApiProperty({ example: '1200.00', description: 'Цена' })
  @Column('decimal')
  price!: number;

  @OneToOne(() => BasketItem, (baskeItem) => baskeItem.item)
  basketItem: BasketItem;

  @OneToMany(() => Info, (info) => info.item, { cascade: true })
  info: Info[];

  @ManyToOne(() => Type, (type) => type.items, { onDelete: 'CASCADE'})
  type: Type;

  @ManyToOne(() => Brand, (brand) => brand.items, { onDelete: 'CASCADE'})
  brand: Brand;
}
