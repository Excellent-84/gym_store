import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class AddRoleDto {

  @ApiProperty({ example: 'USER', description: 'Уникальное значение роли' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'id пользователя' })
  @Type(() => Number)
  @IsInt({ message: 'Должно быть целым числом' })
  readonly userId: number;
}
