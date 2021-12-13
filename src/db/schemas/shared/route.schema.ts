import { Schema } from 'mongoose';
import { BaseEntity, baseEntitySchema } from './base-entity.schema';
import { RoutePoint, routePointSchema } from './route-point.schema';

export interface Route extends BaseEntity {
  name: string;
  points: RoutePoint[];
  lastFetchDate: Date;
}

export const routeSchema = new Schema<Route>({
  name: { type: String, required: true, unique: true },
  points: [...routePointSchema.obj],
  lastFetchDate: { type: Date, required: true },
  ...baseEntitySchema
});
