import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('roles')
export class Role {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
  @Column('varchar', { unique: true })
  value!: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column('varchar', { length: 255 })
  description!: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[]
}