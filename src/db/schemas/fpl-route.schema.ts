import { model, Schema } from 'mongoose';
import { Route, routeSchema } from './shared/route.schema';

interface FplRoute extends Route {
  collectionName?: string;
}

const fplRouteSchema = new Schema<FplRoute>({
  collectionName: {
    type: String,
    required: false,
    default: 'BlueTorchFplRoute'
  },
  ...routeSchema.obj
});

export const FplRouteModel = model<FplRoute>('FplRoute', fplRouteSchema);
