import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateInfoDto {

  @ApiProperty({ example: 'Ball', description: 'Наименование товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title!: string;

  @ApiProperty({ example: 'Description', description: 'Описание' })
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(500, { message: 'Не больше 500 символов' })
  readonly description?: string;

  @ApiProperty({ example: '1', description: 'Уникальный id предмета' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsPositive({ message: 'Должно быть положительным числом' })
  readonly itemId!: number;
}
