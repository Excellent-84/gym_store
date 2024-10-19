import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateBasketDto {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly userId!: number;
}
