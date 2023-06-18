import Modal from 'react-modal';
import { GrFormClose } from 'react-icons/gr';
import Form from '../Form';
import { Button } from './ModalAdd.styled';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalAdd = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
      <Button onClick={closeModal} type='button'>
        <GrFormClose color="currentColor" size="24px" />
      </Button>
      <Form onClickAdd={closeModal} />
    </Modal>
  );
};

export default ModalAdd;
