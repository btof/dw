import { ConfigType } from "./config.type";

const prodConfig: ConfigType = {
	app: {
		port: Number(process.env.PORT!)	
	}
} 

export default prodConfig;