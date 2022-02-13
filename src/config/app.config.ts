import dotenv from "dotenv";
dotenv.config();

const config = {
    name: process.env.APP_NAME ?? 'Express-TS-APP',
    url: process.env.APP_URL ?? 'http://localhost:3000',
    port: Number(process.env.APP_PORT) ?? Number(3000),
}

export default config;