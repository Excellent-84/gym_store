import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BallsService } from './balls.service';
import { Ball } from './balls.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBallDto } from './dto/create-ball.dto';
import { UpdateBallDto } from './dto/update-ball.dto';

@ApiTags('Мячи')
@Controller('balls')
export class BallsController {

  constructor(private readonly ballService: BallsService) {}

  @ApiOperation({ summary: 'Добавить мяч' })
  @ApiResponse({ status: 201, type: Ball })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post('/')
  async create(@Body() dto: CreateBallDto, @UploadedFile() image) {
    return this.ballService.createBall(dto, image);
  }

  @ApiOperation({ summary: 'Получить все мячи' })
  @ApiResponse({ status: 200, type: [Ball] })
  @Get()
  async findAll(): Promise<Ball[]> {
    return this.ballService.getBalls();
  }

  @ApiOperation({ summary: 'Получить мяч по id' })
  @ApiResponse({ status: 200, type: Ball })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ball> {
    return this.ballService.getBallById(id);
  }

  @ApiOperation({ summary: 'Обновить мяч' })
  @ApiResponse({ status: 200, type: Ball })
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateBallDto): Promise<Ball> {
    return this.ballService.updateBall(id, dto);
  }

  @ApiOperation({ summary: 'Удалить мяч' })
  @HttpCode(204)
  // @Roles('ADMIN')
  // @UseGuards(RoleGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.ballService.deleteBall(id);
  }
}
