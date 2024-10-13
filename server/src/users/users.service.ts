import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(dto);
    await this.userRepository.save(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

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
    const user = await this.userRepository.findOneBy({ email });
    return user;
  }
}
