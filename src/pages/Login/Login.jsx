import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operation";
import { FormStyled, FormLabel, FormInput, Button } from "./Login.styled";

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    };

    return (
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
            <FormLabel>
                Email
                <FormInput type="email" name="email" />
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="password" name="password" />
            </FormLabel>
            <Button type="submit">Log In</Button>
        </FormStyled>
    )
};

export default Login;