import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StageService } from '../services';

@Controller('stage')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Get('')
  async findAll() {
    return this.stageService.findAll();
  }
}
