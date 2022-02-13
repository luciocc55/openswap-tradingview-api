import express, { Request, Response } from "express";
import { listHandler, singleHandler } from "../../app/controllers/users.controller";
import apicache from 'apicache';

const cache = apicache.middleware

const usersRoutes = express.Router();

// @route GET api/users
usersRoutes.get('/', cache('5 minutes'), (req: Request, res: Response) => {
  return listHandler(req, res);
});

// @route GET api/users/@id
usersRoutes.get('/:id', cache('1 minute'), (req: Request, res: Response) => {
  return singleHandler(req, res);
});


export default usersRoutes;
