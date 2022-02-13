import express from "express";
import auth from "./api/auth";
import config from "../config/app.config";
import users from "./api/users";

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send(`${config.name} API`);
});

routes.use("/auth", auth);
routes.use("/users", users);

export default routes;
