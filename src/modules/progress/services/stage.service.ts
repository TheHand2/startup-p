import { Injectable } from '@nestjs/common';
import { ProgressStatuses } from '../../../common';
import { stagesData } from '../mock';
import { Stage } from '../model';

@Injectable()
export class StageService {
  private stages: Stage[] = stagesData;

  findAll() {
    return this.stages;
  }

  findById(id: number) {
    return this.stages.find((stage) => stage.id === id);
  }

  previousStageIsCompleted(stageId: number) {
    const stageData = this.findById(stageId);
    // If step is in first stage
    if (stageData.order === 0) {
      return true;
    }
    const previousStage = this.stages.find(
      (stage) => stage.order === stageData.order - 1,
    );
    return previousStage.status === ProgressStatuses.COMPLETED;
  }

  completeStage(stageId: number) {
    this.stages = this.stages.map((stage) => {
      if (stage.id === stageId) {
        return { ...stage, status: ProgressStatuses.COMPLETED };
      }
      return stage;
    });
  }
}
