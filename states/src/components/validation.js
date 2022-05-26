import { object, string } from 'yup';

const validations = object({
    email: string().email().required(),
    password: string().min(5).required(),
    passwordConfirm: string().oneOf(['password']).required()
});

export default validations;