import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import Container from 'components/Container';
import {
  FormStyled,
  FormLabel,
  Button,
  FormInput,
  Section,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Container>
        <FormStyled onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            Username
            <FormInput type="text" name="name" />
          </FormLabel>
          <FormLabel>
            Email
            <FormInput type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password
            <FormInput type="password" name="password" />
          </FormLabel>
          <Button type="submit">Register</Button>
        </FormStyled>
      </Container>
    </Section>
  );
};

export default Register;
