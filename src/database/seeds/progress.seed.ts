import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Command } from 'nestjs-command';
import { Stage, Step } from '../../modules/progress/schemas';

@Injectable()
export class ProgressSeed {
  private readonly stages = ['foundation', 'discovery', 'delivery'];
  private readonly stageSteps = {
    foundation: [
      'setup virtual office',
      'set mission & vision',
      'select business name',
      'buy domains',
    ],
    discovery: ['create roadmap', 'competitor analysis'],
    delivery: ['release marketing website', 'release mvp'],
  };

  constructor(
    @InjectModel(Stage.name) private readonly stageModel: Model<Stage>,
    @InjectModel(Step.name) private readonly stepModel: Model<Step>,
  ) {}

  @Command({
    command: 'create:progress',
    describe: 'create a progress',
  })
  async insert() {
    for (let i = 0; i < this.stages.length; i++) {
      const name = this.stages[i];
      const { _id } = await new this.stageModel({ name, order: i }).save();
      const stepsData = this.stageSteps[name].map((step) => {
        return { name: step, stage: _id };
      });
      await this.stepModel.insertMany(stepsData);
    }
    console.log('Finished');
  }
}
