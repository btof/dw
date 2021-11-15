import { ConfigType } from "./config";

const devConfig: ConfigType = {
	app: {
		port: Number(process.env.PORT!)	
	}
} 

export default devConfig;