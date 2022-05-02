import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import {
  Stage,
  StageSchema,
  Step,
  StepSchema,
} from '../../modules/progress/schemas';
import { ProgressSeed } from './progress.seed';

@Module({
  imports: [
    CommandModule,
    MongooseModule.forFeature([
      {
        name: Stage.name,
        schema: StageSchema,
      },
      {
        name: Step.name,
        schema: StepSchema,
      },
    ]),
  ],
  providers: [ProgressSeed],
  exports: [ProgressSeed],
})
export class SeedsModule {}
