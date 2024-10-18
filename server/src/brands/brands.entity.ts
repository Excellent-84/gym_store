import { ApiProperty } from "@nestjs/swagger";
import { Item } from "src/items/items.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('brands')
export class Brand {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Pastorelli', description: 'Наименование бренда товара'})
  @Column('varchar', { unique: true, length: 20 })
  title!: string;

  @OneToMany(() => Item, (item) => item.brand)
  items: Item[]
}
