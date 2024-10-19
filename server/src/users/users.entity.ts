import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from 'src/roles/roles.entity';
import { Basket } from 'src/baskets/baskets.entity';

@Entity('users')
export class User {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'john@example.com', description: 'Почтовый адрес' })
  @Column('varchar', { unique: true, length: 50 })
  email!: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @Exclude()
  @Column('varchar', { length: 255 })
  password!: string;

  @OneToOne(() => Basket, (basket) => basket.user)
  basket: Basket

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
