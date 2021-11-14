export type Config = {
    app: {
        port: number;
    },
    logger?: {
        appName: string,
        host: string,
        port: number
    },
    db?: {
        host: string
    }
}