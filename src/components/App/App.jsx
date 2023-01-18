import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import GlobalStyle from '../GlobalStyle';
// import { selectError, selectIsLoading } from 'redux/selectors';
// const HomePage = lazy(() => import('pages/Home'));
// const RegisterPage = lazy(() => import('pages/Register'));
// const LoginPage = lazy(() => import('pages/Login'));
// const ContactsPage = lazy(() => import('pages/Contacts'));
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
