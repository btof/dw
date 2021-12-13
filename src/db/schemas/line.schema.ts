import { model, Schema } from 'mongoose';
import { BaseShape, baseShapeSchema } from './shared/base-shape.schema';
import { Environment, environmentSchema } from './shared/environment.schema';

interface Line extends BaseShape, Environment {}

const lineSchema = new Schema<Line>({
  ...baseShapeSchema.obj,
  ...environmentSchema.obj
});

export const LineModel = model<Line>('Line', lineSchema);
