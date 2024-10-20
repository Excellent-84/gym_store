import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateBasketItemDto {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор корзины' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly basketId!: number;

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор предмета' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly itemId!: number;
}
