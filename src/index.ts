import express, { Application, Request, Response } from 'express';
import config from './core/config';
import initRoutes from './api';

const app: Application = express();
const PORT = config.app.port;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

initRoutes(app);

app.listen(PORT, async () => {
  console.log(`DataWriter is running on http://localhost:${PORT}`);
});
