import { Schema, Document } from 'mongoose';

export interface BaseEntity extends Document {
  basicType: string;
  lpdSequence: number;
  lastModified: Date;
  isDeleted?: string;
  mark: string;
}

export const baseEntitySchema = new Schema<BaseEntity>({
  basicType: { type: String, required: true },
  lpdSequence: { type: Number, required: true },
  lastModified: { type: Date, required: true },
  isDeleted: { type: String, required: false },
  mark: { type: String, required: true }
});
