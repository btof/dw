import { ConfigType } from "./config.type";

const devConfig: ConfigType = {
	app: {
		port: Number(process.env.PORT!)	
	}
} 

export default devConfig;