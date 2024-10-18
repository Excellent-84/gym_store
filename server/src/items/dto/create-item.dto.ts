import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {

  @ApiProperty({ example: 'Hoop', description: 'Наименование товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title!: string;

  @ApiProperty({ example: '1200.00', description: 'Цена' })
  @IsDecimal({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly price!: number;
}
