import express, { Application, Request, Response } from "express";
import config from "./config/config";

const app: Application = express();
const port = config.app.port;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
})