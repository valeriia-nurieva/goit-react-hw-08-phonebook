import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from 'redux/auth/operation';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { userRegisterSchema } from 'utils/validationSchemas';
import Container from 'components/Container';
import { Loader } from 'components/Loader';
import {
  FormStyled,
  FormLabel,
  Button,
  FormInput,
  Section,
  ErrorText,
} from './Register.styled';

const initialValues = {
  password: '',
  email: '',
  name: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(error);
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .then(() => {
        dispatch(logIn({ email: values.email, password: values.password }));
        toast('Yay! Registration is successful. Welcome to the Phonebook.', {
          icon: '🎉',
        });
        resetForm();
      })
      .catch(error => {
        console.log(error.message);
        toast.error('Something went wrong! Please try again later');
      });
  };

  return (
    <Section>
      <Container>
        {isLoading && !error && <Loader />}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userRegisterSchema}
        >
          <FormStyled autoComplete="off">
            <FormLabel>
              Username
              <FormInput type="text" name="name" />
            </FormLabel>
            <ErrorMessage name="name" component={ErrorText} />
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
            <Button type="submit">Register</Button>
          </FormStyled>
        </Formik>
      </Container>
    </Section>
  );
};

export default Register;
