import { Schema } from 'mongoose';
import { BaseEntity, baseEntitySchema } from './base-entity.schema';
import { RoutePoint, routePointSchema } from './route-point.schema';

export interface RouteTemplate extends BaseEntity {
  name: string;
  points: RoutePoint[];
  lastFetchDate: Date;
}

export const routeTemplateSchema = new Schema<RouteTemplate>({
  name: { type: String, required: true, unique: true },
  points: [...routePointSchema.obj],
  lastFetchDate: { type: Date, required: true },
  ...baseEntitySchema
});
