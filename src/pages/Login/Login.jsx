import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { userLogInSchema } from 'utils/validationSchemas';
import Container from 'components/Container';
import { Loader } from 'components/Loader';
import {
  Section,
  FormStyled,
  FormLabel,
  FormInput,
  Button,
  ErrorText,
} from './Login.styled';

const initialValues = {
  password: '',
  email: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    };
    
  return (
    <Section>
      <Container>
        {isLoading && !error && <Loader />}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userLogInSchema}
        >
          <FormStyled autoComplete="off">
            <FormLabel>
              Email
              <FormInput type="email" name="email" />
            </FormLabel>
            <ErrorMessage name="email" component={ErrorText} />
            <FormLabel>
              Password
              <FormInput type="password" name="password" />
            </FormLabel>
            <ErrorMessage name="password" component={ErrorText} />
            {error && (
              <ErrorText>
                Sorry, we did not find this user &#128532; Please check your
                login information and try again.
              </ErrorText>
            )}
            <Button type="submit">Log In</Button>
          </FormStyled>
        </Formik>
      </Container>
    </Section>
  );
};

export default Login;
