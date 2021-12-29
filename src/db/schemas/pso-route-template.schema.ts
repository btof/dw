import { model, Schema } from 'mongoose';
import {
  RouteTemplate,
  routeTemplateSchema
} from './shared/route-template.schema';

interface PsoRouteTemplate extends RouteTemplate {
  collectionName?: string;
}

const psoRouteTemplateSchema = new Schema<PsoRouteTemplate>({
  ...routeTemplateSchema.obj,
  collectionName: {
    type: String,
    required: false,
    default: 'BlueTorchPsoRouteTemplate'
  }
});

export const PsoRouteTemplateModel = model<PsoRouteTemplate>(
  'PsoRouteTemplate',
  psoRouteTemplateSchema
);
