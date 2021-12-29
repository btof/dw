import { model, Schema } from 'mongoose';
import { RouteTemplate, routeTemplateSchema } from './shared/route-template.schema';

interface FplRouteTemplate extends RouteTemplate {
  collectionName?: string;
}

const fplRouteTemplateSchema = new Schema<FplRouteTemplate>({
  collectionName: {
    type: String,
    required: false,
    default: 'BlueTorchFplRouteTemplate'
  },
  ...routeTemplateSchema.obj
});

export const FplRouteTemplateModel = model<FplRouteTemplate>(
  'FplRouteTemplate',
  fplRouteTemplateSchema
);
