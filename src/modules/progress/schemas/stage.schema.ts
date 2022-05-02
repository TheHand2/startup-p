import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProgressStatuses } from '../../../common';

@Schema({ timestamps: true })
export class Stage extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
    enum: [...Object.values(ProgressStatuses)],
    required: true,
    default: ProgressStatuses.INITIAL,
  })
  status: string;

  @Prop({
    type: Number,
    required: true,
  })
  order: number;
}

export const StageSchema = SchemaFactory.createForClass(Stage);
