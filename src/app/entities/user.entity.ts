import User from "../models/user.model";
import { sanitizeUser } from "../services/user.service";

const users: User[] = [
    {
        id: 1,
        name: "Mahmoud",
        email: "mahmoud@example.com",
        password: "secret"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@example.com",
        password: "secret"
    },
    {
        id: 3,
        name: "Alaa",
        email: "alaa@example.com",
        password: "secret"
    },
];

const getAll = async (): Promise<User[]> => {
    return users.map(user => sanitizeUser(user));
}

const getById = async (id: number): Promise<User | null> => {
    const result = users.find(user => user.id == id);
    if (result != null) {
        return sanitizeUser(result);
    } else {
        return null;
    }
}

const getByEmailAndPassword = async (email: string, password: string): Promise<User | null> => {
    const result = users.find(user => (user.email == email && user.password == password));
    if (result != null) {
        return sanitizeUser(result);
    } else {
        return null;
    }
}

export { getAll, getById, getByEmailAndPassword };