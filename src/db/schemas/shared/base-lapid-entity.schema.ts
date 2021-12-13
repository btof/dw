import { Schema, Document } from 'mongoose';

export interface BaseLapidEntity extends Document {
  primary: string;
  secondary: string;
  collectionName: string;
  name: string;
  color: string;
  remark?: string;
}

export const baseLapidEntitySchema = new Schema<BaseLapidEntity>({
  primary: { type: String, required: true },
  secondary: { type: String, required: true },
  collectionName: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  remark: String
});
