import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StageController, StepController } from './controllers';
import { Stage, StageSchema, Step, StepSchema } from './schemas';
import { StageService, StepService } from './services';

@Module({
  imports: [
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
  providers: [StepService, StageService],
  controllers: [StageController, StepController],
})
export class ProgressModule {}
