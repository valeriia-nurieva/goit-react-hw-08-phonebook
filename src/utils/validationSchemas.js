import { object, string } from 'yup';

export let userLogInSchema = object({
    password: string().min(7).required(),
    email: string().email().required(),
});

export let userRegisterSchema = object({
    password: string().min(7).required(),
    email: string().email().required(),
    name: string().min(2).required(),
});