import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BasketsService } from 'src/baskets/baskets.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RolesService,
    private readonly basketService: BasketsService
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(dto);
    const userRole = await this.roleService.getRoleByValue('USER');
    user.role = userRole;
    const userBasket = await this.basketService.createBasket({userId: user.id});
    user.basket = userBasket;
    await this.userRepository.save(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find({
      relations: { role: true, basket: true }
    });
    return users;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['role', 'basket']
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    return user;
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.getUserById(id);
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const updatedUser = { ...user, ...dto, password: hashedPassword };
    return await this.userRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.getUserById(id);
    await this.userRepository.remove(user);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['role']
     });
    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.getUserById(dto.userId);
    const userRole = await this.roleService.getRoleByValue(dto.value);
    user.role = userRole;
    await this.userRepository.save(user);
    return dto;
  }
}
