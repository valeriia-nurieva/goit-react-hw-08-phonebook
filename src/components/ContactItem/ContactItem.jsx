import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Button, Wrapper, Phone } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <p>{name}</p>
      <Wrapper>
        <Phone href={`tel:${number}`}>{number}</Phone>
        <Button type="button" onClick={handleDelete}>
          <MdOutlineDeleteOutline color="currentColor" size="24px" />
        </Button>
      </Wrapper>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
