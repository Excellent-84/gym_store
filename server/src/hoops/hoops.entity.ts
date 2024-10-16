import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hoops')
export class Hoop {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Hoop', description: 'Наименование товара'})
  @Column('varchar', { length: 20 })
  title!: string;

  @ApiProperty({ example: 'Pastorelli', description: 'Производитель' })
  @Column('varchar', { length: 20 })
  manufacturer!: string;

  @ApiProperty({ example: 'Diameter', description: 'Диаметр' })
  @Column('integer')
  size!: number;

  @ApiProperty({ example: 'Weight', description: 'Вес' })
  @Column('integer')
  weight!: number;

  @ApiProperty({ example: 'Description', description: 'Описание' })
  @Column('varchar', { length: 500 })
  description: string;

  @ApiProperty({ example: 'Image', description: 'Изображение' })
  @Column('varchar', { length: 50 })
  image: string;

  @ApiProperty({ example: '1200.00', description: 'Цена' })
  @Column('decimal')
  price!: number;
}
