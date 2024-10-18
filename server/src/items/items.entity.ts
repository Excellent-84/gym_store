import { ApiProperty } from '@nestjs/swagger';
import { Brand } from 'src/brands/brands.entity';
import { Type } from 'src/types/types.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Type, (type) => type.items)
  type: Type

  @ManyToOne(() => Brand, (brand) => brand.items)
  brand: Brand
}
