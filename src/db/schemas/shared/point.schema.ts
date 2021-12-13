import { Schema } from 'mongoose';

export interface Point {
  longitude: number;
  latitude: number;
}

export const pointSchema = new Schema<Point>({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true }
});
