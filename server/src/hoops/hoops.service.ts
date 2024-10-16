import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hoop } from './hoops.entity';
import { Repository } from 'typeorm';
import { CreateHoopDto } from './dto/create-hoop.dto';
import { UpdateHoopDto } from './dto/update-hoop.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class HoopsService {

  constructor(
    @InjectRepository(Hoop) private readonly hoopRepository: Repository<Hoop>,
                            private readonly fileService: FilesService
  ) {}

  async createHoop(dto: CreateHoopDto, image: any): Promise<Hoop> {
    const fileName = await this.fileService.createFile(image);
    const hoop = this.hoopRepository.create({...dto, image: fileName});
    await this.hoopRepository.save(hoop);
    return hoop;
  }

  async getHoops(): Promise<Hoop[]> {
    const hoops = await this.hoopRepository.find();
    return hoops;
  }

  async getHoopById(id: number): Promise<Hoop> {
    const hoop = await this.hoopRepository.findOneBy({ id });

    if (!hoop) {
      throw new NotFoundException('Обруч не найден')
    }

    return hoop;
  }

  async updateHoop(id: number, dto: UpdateHoopDto): Promise<Hoop> {
    const hoop = await this.getHoopById(id);
    Object.assign(hoop, dto);
    return await this.hoopRepository.save(hoop);
  }

  async deleteHoop(id: number): Promise<void> {
    const hoop = await this.getHoopById(id);
    await this.hoopRepository.remove(hoop);
  }
}
