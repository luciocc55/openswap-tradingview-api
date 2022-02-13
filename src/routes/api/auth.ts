import express, { Request, Response } from "express";
import { loginHandler, registerHandler } from "../../app/controllers/auth.controller";

const authRoutes = express.Router();

// @route POST api/auth/login
authRoutes.post('/login', (req: Request, res: Response) => {
  return loginHandler(req, res);
});

// @route POST api/auth/register
authRoutes.post('/register', (req: Request, res: Response) => {
  return registerHandler(req, res);
});


export default authRoutes;
