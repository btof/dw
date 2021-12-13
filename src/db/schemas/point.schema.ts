import { model, Schema } from 'mongoose';
import { baseLapidEntitySchema, BaseLapidEntity } from './shared/base-lapid-entity.schema';
import { Environment, environmentSchema } from './shared/environment.schema';
import { ExpirableEntity, expirableEntitySchema } from './shared/expirable-entity.schema';

interface Point extends BaseLapidEntity, Environment, ExpirableEntity {}

const pointSchema = new Schema<Point>({
	position: {
		latitude: {type: Number, required: true},
		longitude: {type: Number, required: true},
		m_datum: {type: String, required: true},

	},
	height: {type: Number, required: true},
	pointType: {type: String, required: true},
  ...baseLapidEntitySchema.obj,
  ...environmentSchema.obj,
	...expirableEntitySchema
});

export const PointModel = model<Point>('Point', pointSchema);
