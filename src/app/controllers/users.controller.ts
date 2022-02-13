import { Request, Response } from "express";
import { getAll, getById } from "../entities/user.entity";

const listHandler = async (req: Request, res: Response) => {
    const users = await getAll();
    return res.send(users);
}

const singleHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getById((id as unknown) as number);
    return res.send(user);
}

export { listHandler, singleHandler };