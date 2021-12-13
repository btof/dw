import { model, Schema } from 'mongoose';
import { BaseEntity, baseEntitySchema } from './shared/base-entity.schema';

interface Preset extends BaseEntity {
  name: string;
  data: string;
  expirationDate?: Date;
  lastFetchDate?: Date;
  collectionName?: string;
}

const presetSchema = new Schema<Preset>({
  name: { type: String, required: true, unique: true },
  data: { type: String, required: true },
  expirationDate: { type: Date, required: false, default: null, expires: 0 },
  lastFetchDate: { type: Date, required: false, default: new Date() },
  collectionName: { type: String, required: false, default: 'BlueTorchPreset' },
  ...baseEntitySchema.obj
});

export const PresetModel = model<Preset>('Preset', presetSchema);
