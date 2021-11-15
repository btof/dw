import { ConfigType } from "./config";

const prodConfig: ConfigType = {
	app: {
		port: Number(process.env.PORT!)	
	}
} 

export default prodConfig;