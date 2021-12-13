import { model, Schema } from 'mongoose';
import { BaseShape, baseShapeSchema } from './shared/base-shape.schema';
import { Environment, environmentSchema } from './shared/environment.schema';

interface Circle extends BaseShape, Environment {
  radius: number;
}

const circleSchema = new Schema<Circle>({
  ...baseShapeSchema.obj,
  ...environmentSchema.obj,
  radius: { type: Number, required: true }
});

export const CircleModel = model<Circle>('Circle', circleSchema);
