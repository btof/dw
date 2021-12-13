import { Schema, Document } from 'mongoose';
import { ExpirableEntity, expirableEntitySchema } from './expirable-entity.schema';
import { Point, pointSchema } from './point.schema';

export interface BaseShape extends ExpirableEntity, Document {
  color: string;
  points: Point[];
  minAltitude: number;
  maxAltitude: number;
}

export const baseShapeSchema = new Schema<BaseShape>({
  color: { type: String, required: true },
  points: [...pointSchema.obj],
  minAltitude: { type: Number, required: true },
  maxAltitude: { type: Number, required: true },
  ...expirableEntitySchema.obj
});
