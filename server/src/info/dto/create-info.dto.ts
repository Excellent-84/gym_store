import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateInfoDto {

  @ApiProperty({ example: 'Ball', description: 'Наименование товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title!: string;

  @ApiProperty({ example: 'Description', description: 'Описание' })
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(500, { message: 'Не больше 500 символов' })
  readonly description?: string;

  // @ApiProperty({ example: 'Pastorelli', description: 'Производитель' })
  // @IsString({ message: 'Должно быть строкой' })
  // @MaxLength(20, { message: 'Не больше 20 символов' })
  // readonly manufacturer!: string;

  // @ApiProperty({ example: 'Diameter', description: 'Диаметр' })
  // @IsNumber({}, { message: 'Должно быть числом' })
  // @IsPositive({ message: 'Должно быть положительным числом' })
  // readonly size!: number;

  // @ApiProperty({ example: 'Weight', description: 'Вес' })
  // @IsNumber({}, { message: 'Должно быть числом' })
  // @IsPositive({ message: 'Должно быть положительным числом' })
  // readonly weight!: number;

  // @ApiProperty({ example: '1200.00', description: 'Цена' })
  // @IsDecimal({}, { message: 'Должно быть числом' })
  // @IsPositive({ message: 'Должно быть положительным числом' })
  // readonly price!: number;
}
