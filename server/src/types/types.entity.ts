import { ApiProperty } from "@nestjs/swagger";
import { Brand } from "src/brands/brands.entity";
import { Item } from "src/items/items.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('types')
export class Type {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Hoop', description: 'Наименование типа товара'})
  @Column('varchar', { unique: true, length: 20 })
  title!: string;

  @OneToMany(() => Item, (item) => item.type, { cascade: true })
  items: Item[];

  @ManyToMany(() => Brand, (brand) => brand.types)
  brands: Brand[];
}
