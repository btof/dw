import prodConfig from './config.prod';
import devConfig from './config.dev';
import { RoutesConfigType } from '../types/config';

export type ConfigType = {
  app: {
    port: number;
    routes: RoutesConfigType;
  };
  logger?: {
    appName: string;
    host: string;
    port: number;
  };
  db?: {
    host: string;
  };
};

const init = (): ConfigType => {
  const env: string = process.env.NODE_ENV || 'development';
  const config = env.indexOf('production') > -1 ? prodConfig : devConfig;

  console.log(
    `Server is starting with ${env} config\n${JSON.stringify(config)}`
  );

  return config as ConfigType;
};

export default init();
