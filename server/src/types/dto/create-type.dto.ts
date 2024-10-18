import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateTypeDto {

  @ApiProperty({ example: 'Hoop', description: 'Наименование типа товара'})
  @IsString({ message: 'Должно быть строкой' })
  @MaxLength(20, { message: 'Не больше 20 символов' })
  readonly title!: string;
}
