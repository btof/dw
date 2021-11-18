import { ConfigType } from './config';
import { entitiesConfig } from './config.shared';

export default {
  app: {
    port: Number(process.env.PORT!),
    routes: entitiesConfig
  }
} as ConfigType;
