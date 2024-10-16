import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class UpdateHoopDto {

  @ApiProperty({ example: 'Hoop', description: 'Наименование товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title?: string;

  @ApiProperty({ example: 'Pastorelli', description: 'Производитель' })
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly manufacturer?: string;

  @ApiProperty({ example: 'Diameter', description: 'Диаметр' })

  readonly size?: number;

  @ApiProperty({ example: 'Weight', description: 'Вес' })

  readonly weight?: number;

  @ApiProperty({ example: 'Description', description: 'Описание' })
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(500, { message: 'Не больше 500 символов' })
  readonly description?: string;

//   @ApiProperty({ example: 'Image', description: 'Изображение' })

//   readonly image?: string;

  @ApiProperty({ example: '1200.00', description: 'Цена' })

  readonly price?: number;
}