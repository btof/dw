import { model, Schema } from 'mongoose';
import { BaseShape, baseShapeSchema } from './shared/base-shape.schema';
import { Environment, environmentSchema } from './shared/environment.schema';

interface HealthCheck {
  _id: string;
  basicType: string;
  lastModified: Date;
  collectionName: string;
}

const healthCheckSchema = new Schema<HealthCheck>({
  _id: { type: String, required: true },
  basicType: { type: String, required: true },
  lastModified: { type: Date, required: true },
  collectionName: { type: String, required: true }
});

export const HealthCheckModel = model<HealthCheck>(
  'HealthCheck',
  healthCheckSchema
);
