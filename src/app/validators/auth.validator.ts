import ValidationError from "../models/validation.error";

const registerUserValidator = (data: any): ValidationError[] => {
    const errors: ValidationError[] = [];
    if (!data.name) {
        errors.push({
            field: 'name',
            message: 'Name is required'
        });
    }
    if (!data.email) {
        errors.push({
            field: 'email',
            message: 'Email is required'
        });
    }
    if (!data.password) {
        errors.push({
            field: 'password',
            message: 'Password is required'
        });
    }
    return errors;
}

const loginUserValidator = (data: any): ValidationError[] => {
    const errors: ValidationError[] = [];
    if (!data.email) {
        errors.push({
            field: 'email',
            message: 'Email is required'
        });
    }
    if (!data.password) {
        errors.push({
            field: 'password',
            message: 'Password is required'
        });
    }
    return errors;
}

export { loginUserValidator, registerUserValidator };