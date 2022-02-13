import User from "../models/user.model";

const sanitizeUser = (user: User): User => {
    return {
        ...user,
        password: '********'
    };
}

export { sanitizeUser };