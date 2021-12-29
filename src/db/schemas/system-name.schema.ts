import { model, Schema } from 'mongoose';
import { BaseEntity, baseEntitySchema } from './shared/base-entity.schema';

interface SystemName extends BaseEntity {
  sysId: number;
  hebrewName: string;
}

const systemNameSchema = new Schema<SystemName>({
  ...baseEntitySchema.obj,
  sysId: { type: Number, required: true, unique: true },
  hebrewName: { type: String, required: true }
});

export const systemNameModel = model<SystemName>(
  'SystemName',
  systemNameSchema
);
