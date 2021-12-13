import { Schema, Document } from 'mongoose';
import { Point, pointSchema } from './point.schema';

export interface ExpirableEntity extends Document {
  expirationDate?: Date;
  expiry: string;
}

export const expirableEntitySchema = new Schema<ExpirableEntity>({
  expirationDate: { type: Date, default: null },
  expiry: { type: String, required: true }
});
