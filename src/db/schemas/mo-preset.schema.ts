import { model, Schema } from 'mongoose';
import { BaseEntity, baseEntitySchema } from './shared/base-entity.schema';

interface MoPresetTakeOffTimeRangeFilter {
  future: number;
  startDate: Date;
  endDate: Date;
}

interface MoPresetTakeOffTimeFilter {
  custom: boolean;
  range: MoPresetTakeOffTimeRangeFilter;
}

interface MoPresetFilters {
  map: any;
  showResponsibleTracks: boolean;
  takeOffTime: MoPresetTakeOffTimeFilter;
}

interface MoPresetField {
  index: number;
  fieldId: string;
}

interface MoPresetFields {
  isExpandedOpened: boolean;
  mainFields: [MoPresetField];
  secondaryFields: [MoPresetField];
  extendedMainFields: [MoPresetField];
  extendedSecondaryFields: [MoPresetField];
}

interface MoPreset extends BaseEntity {
  name: string;
  expirationDate: Date;
  fields: MoPresetFields;
  filters: MoPresetFilters;
}

const moPresetSchema = new Schema<MoPreset>({
  ...baseEntitySchema.obj,
  name: { type: String, required: true },
  expirationDate: { type: Date, default: null, expires: 0 },
  fields: {
    default: null,
    type: {
      isExpandedOpened: { type: Boolean, required: true },
      mainFields: {
        required: true,
        type: [
          {
            index: { type: Number, required: true },
            fieldId: { type: String, required: true }
          }
        ]
      },
      secondaryFields: {
        required: true,
        type: [
          {
            index: { type: Number, required: true },
            fieldId: { type: String, required: true }
          }
        ]
      },
      extendedMainFields: {
        required: true,
        type: [
          {
            index: { type: Number, required: true },
            fieldId: { type: String, required: true }
          }
        ]
      },
      extendedSecondaryFields: {
        required: true,
        type: [
          {
            index: { type: Number, required: true },
            fieldId: { type: String, required: true }
          }
        ]
      }
    }
  },
  filters: {
    default: null,
    type: {
      map: { type: {}, required: true },
      showResponsibleTracks: { type: Boolean, required: true },
      takeOffTime: {
        required: true,
        type: {
          custom: { type: Boolean, required: true },
          range: {
            required: true,
            type: {
              future: { type: Number, required: true },
              startDate: { type: Date, required: true },
              endDate: { type: Date, required: true }
            }
          }
        }
      }
    }
  }
});

export const MoPresetModel = model<MoPreset>('MoPreset', moPresetSchema);
