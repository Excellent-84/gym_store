import { ApiProperty } from "@nestjs/swagger";
import { Item } from "src/items/items.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('types')
export class Type {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Hoop', description: 'Наименование типа товара'})
  @Column('varchar', { unique: true, length: 20 })
  title!: string;

  @OneToMany(() => Item, (item) => item.type)
  items: Item[]
}
