import { model, Schema } from 'mongoose';
import { Route, routeSchema } from './shared/route.schema';

interface PsoRoute extends Route {
  collectionName?: string;
}

const psoRouteSchema = new Schema<PsoRoute>({
  ...routeSchema.obj,
  collectionName: {
    type: String,
    required: false,
    default: 'BlueTorchPsoRoute'
  }
});

export const PsoRouteModel = model<PsoRoute>('PsoRoute', psoRouteSchema);
