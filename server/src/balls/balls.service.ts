import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ball } from './balls.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { CreateBallDto } from './dto/create-ball.dto';
import { UpdateBallDto } from './dto/update-ball.dto';

@Injectable()
export class BallsService {

  constructor(
    @InjectRepository(Ball) private readonly ballRepository: Repository<Ball>,
                            private readonly fileService: FilesService
  ) {}

  async createBall(dto: CreateBallDto, image: any): Promise<Ball> {
    const fileName = await this.fileService.createFile(image);
    const ball = this.ballRepository.create({...dto, image: fileName});
    await this.ballRepository.save(ball);
    return ball;
  }

  async getBalls(): Promise<Ball[]> {
    const balls = await this.ballRepository.find();
    return balls;
  }

  async getBallById(id: number): Promise<Ball> {
    const ball = await this.ballRepository.findOneBy({ id });

    if (!ball) {
      throw new NotFoundException('Мяч не найден')
    }

    return ball;
  }

  async updateBall(id: number, dto: UpdateBallDto): Promise<Ball> {
    const ball = await this.getBallById(id);
    Object.assign(ball, dto);
    return await this.ballRepository.save(ball);
  }

  async deleteBall(id: number): Promise<void> {
    const ball = await this.getBallById(id);
    await this.ballRepository.remove(ball);
  }
}
