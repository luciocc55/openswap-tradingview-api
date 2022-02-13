import { Request, Response } from "express";
import { getByEmailAndPassword } from "../entities/user.entity";
import { loginUserValidator } from "../validators/auth.validator";

const loginHandler = async (req: Request, res: Response) => {
    // validate user
    const validator = loginUserValidator(req.body);
    if (validator.length > 0) {
        return res.status(400).send(validator);
    };

    const { email, password } = req.body;

    // get user by email and password
    const user = await getByEmailAndPassword(email, password);
    if (!user) {
        return res.status(400).send({ message: "Invalid credentials" });
    } else {
        return res.send(user);
    }
}

const registerHandler = (req: Request, res: Response) => {
    return res.send(req);
}

export { loginHandler, registerHandler };