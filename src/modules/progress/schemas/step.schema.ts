import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ProgressStatuses } from '../../../common';
import { Stage } from './stage.schema';

@Schema({ timestamps: true })
export class Step extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Stage',
    required: true,
  })
  stage: Stage;

  @Prop({
    type: String,
    enum: [...Object.values(ProgressStatuses)],
    required: true,
    default: ProgressStatuses.INITIAL,
  })
  status: string;
}

export const StepSchema = SchemaFactory.createForClass(Step);

StepSchema.index({ name: 1, stage: 1 }, { unique: true });
