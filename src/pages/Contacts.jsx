import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { Loader } from 'components/Loader';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

import styled from 'styled-components';
const Title = styled.h1`
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
`;

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Title as="h2">Contacts</Title>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && <ContactList />}
    </>
  );
};
