import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import Container from 'components/Container';
import { List, Item, Info } from './ContactList.styled';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      {contacts.length > 0 ? (
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactItem name={name} id={id} number={number} />
              </Item>
            );
          })}
        </List>
      ) : (
        <Info>you have no contacts yet &#128542;</Info>
      )}
    </Container>
  );
};

export default ContactList;
