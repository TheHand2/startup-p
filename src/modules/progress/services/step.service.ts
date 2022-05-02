import { Injectable } from '@nestjs/common';
import { ProgressStatuses } from '../../../common';
import { stageStepsData } from '../mock';
import { Step } from '../model';

@Injectable()
export class StepService {
  private steps: Step[] = stageStepsData;

  findById(id: number) {
    return this.steps.find((step) => step.id === id);
  }

  complete(stepId: number) {
    this.steps = this.steps.map((step) => {
      if (step.id === stepId) {
        return { ...step, status: ProgressStatuses.COMPLETED };
      }
      return step;
    });
  }

  incompleteStepsCountInStage(stageId: number) {
    return this.steps.filter(
      (step) =>
        step.stage === stageId && step.status !== ProgressStatuses.COMPLETED,
    ).length;
  }
}
