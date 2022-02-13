import express, { Application } from "express";
import cors from "cors";
import logger from "./app/middlewares/logger";
import routes from "./routes";
import helmet from "helmet";
import config from "./config/app.config";

const app: Application = express(); // create an express application
const port = config.port; // default port to listen

// Defaul middlewares
app.use(cors(), helmet(), logger);

// a static file server that points to the "public/www" directory
app.use(express.static('www'));

// parse application/json
app.use(express.json());

// Router
app.use("/api", routes);

// Start the server
app.listen(port, () => {
  console.log(`${config.name} is running on: ${config.url}!`);
});

export default app;
