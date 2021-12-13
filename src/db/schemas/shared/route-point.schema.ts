import { Schema } from 'mongoose';

export interface RoutePoint {
  simulativePosition: {
    x: number;
    y: number;
    z: number;
  };
  altitudeForView: number;
  plannedVelocity: number;
  waitingData: {
    seconds: number;
    isCircle: boolean;
    isSeconds?: boolean;
  };
}

export const routePointSchema = new Schema<RoutePoint>({
  simulativePosition: { 
		x: {type: Number, required: true },
		y: {type: Number, required: true },
		z: {type: Number, required: true },
	},
  altitudeForView: { type: Number, required: true },
  plannedVelocity: { type: Number, required: true },
  waitingData: { 
		seconds: {type: Number, required: true },
		isCircle: {type: Boolean, required: true },
		isSeconds: {type: Boolean, required: false },
	},	
});
