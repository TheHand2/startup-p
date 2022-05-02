import {
  BadRequestException,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ProgressStatuses } from '../../../common';
import { StageService, StepService } from '../services';

@Controller('step')
export class StepController {
  constructor(
    private readonly stepService: StepService,
    private readonly stageService: StageService,
  ) {}

  @Post(':id/complete')
  @HttpCode(HttpStatus.OK)
  async completeStep(@Param('id') id: number) {
    const stepData = this.stepService.findById(id);
    if (stepData.status === ProgressStatuses.COMPLETED) {
      throw new BadRequestException('Step is already completed');
    }

    const previousStageIsCompleted = this.stageService.previousStageIsCompleted(
      stepData.stage,
    );
    if (!previousStageIsCompleted) {
      throw new BadRequestException('Previous stage is not completed');
    }

    this.stepService.complete(stepData.id);
    const incompleteSteps = this.stepService.incompleteStepsCountInStage(
      stepData.stage,
    );
    if (!incompleteSteps) {
      this.stageService.completeStage(stepData.stage);
    }

    return {
      statusCode: HttpStatus.OK,
      data: {
        message: 'Updated',
      },
    };
  }
}
