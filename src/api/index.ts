import { Application } from 'express';
import config from '../core/config/config';
import createRouter from './router-factory';

export default (app: Application) => {
  const routes = config.app.routes;

  Object.entries(routes).forEach((route) => {
    app.use(`/${route[0]}`, createRouter(route[1]));
  });
};
