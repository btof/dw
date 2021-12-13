import { model, Schema } from 'mongoose';
import { BaseShape, baseShapeSchema } from './shared/base-shape.schema';
import { Environment, environmentSchema } from './shared/environment.schema';

interface Area extends BaseShape, Environment {}

const areaSchema = new Schema<Area>({
  ...baseShapeSchema.obj,
  ...environmentSchema.obj
});

export const AreaModel = model<Area>('Area', areaSchema);
