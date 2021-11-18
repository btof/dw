import express, { Application, Request, Response } from 'express';
import config from './core/config/config';
import initRoutes from './api';

const app: Application = express();
const port = config.app.port;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

initRoutes(app);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
