import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/items/items.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('item_info')
export class Info {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Ball', description: 'Наименование товара'})
  @Column('varchar', { length: 20 })
  title!: string;

  @ApiProperty({ example: 'Description', description: 'Описание' })
  @Column('varchar', { length: 500 })
  description: string;

  @ManyToOne(() => Item, (item) => item.info, { onDelete: 'CASCADE'})
  item: Item;
}
