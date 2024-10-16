import { PartialType } from '@nestjs/swagger';
import { CreateHoopDto } from './create-hoop.dto';

export class UpdateHoopDto extends PartialType(CreateHoopDto) {}
