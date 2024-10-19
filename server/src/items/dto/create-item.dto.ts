import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {

  @ApiProperty({ example: 'Hoop', description: 'Наименование товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title!: string;

  @ApiProperty({ example: '1200.00', description: 'Цена' })
  @IsDecimal({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly price!: number;

  @ApiProperty({ example: '2', description: 'id типа' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly typeId!: number;

  @ApiProperty({ example: '1', description: 'id бренда' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly brandId!: number;
}
