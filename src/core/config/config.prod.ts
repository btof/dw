import { ConfigType } from './index';
import { entitiesConfig } from './config.shared';

export default {
  app: {
    port: Number(process.env.PORT!),
    routes: entitiesConfig
  },
	db: {
		connectionString: "mongodb+srv://lapid:<password>@cluster0.eltrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	}

} as ConfigType;
